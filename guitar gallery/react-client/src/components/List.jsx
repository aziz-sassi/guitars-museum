import axios from 'axios';
import React from 'react';
import PostGuitar from './post.jsx';

class List extends React.Component {
constructor(props){
super(props)
this.state = {
  likes : 0

}


this.handlereducelikes = this.handlereducelikes.bind(this);
this.handledelete = this.handledelete.bind(this);
this.handlelikes =this.handlelikes.bind(this);
this.handlelikingclick = this.handlelikingclick.bind(this);
this.updatehandler = this.updatehandler.bind(this);

}
updatehandler (){
  this.props.updater()
}
handledelete(id){
axios.delete('/deleteitems/'+id,[this.props.items])

.then(response=>{
  console.log(response);
  this.updatehandler();

  this.setState({[this.props.items]:response.data})
})
.catch(err=>{
  throw err;
})
}
handlelikingclick(id){
  if (this.state.likes === 0) {
    this.setState({
      likes : 1
  })
    this.handlelikes(id);
    console.log("liked successfully")
  }else if (this.state.likes===1) {
    this.setState({
      likes : 0
    })
    this.handlereducelikes(id)
    console.log("disliked successfully")
    }
    else {
      console.log("something went wrong !")
    }
  
}

handlelikes(id){
  axios.patch(`/likesupdate/`+id)

  .then(response=>{
    console.log(response)
    this.updatehandler();

  })
  .catch(err=>{
    throw err;
  })
}
handlereducelikes(id){
  axios.patch(`/likesdelete/`+id)

  .then(response=>{
    console.log(response)
    this.updatehandler();

  })
  .catch(err=>{
    throw err;
  })
}




 
render() {
  return(
    <div>
    <h4> List of rare guitars </h4>
    There are { this.props.items.length } items.
    { this.props.items.map(item =><div className = 'post' key = {item.id}>
  <h3 className = 'post-title'>{item.model}</h3>

  <img className = "post-image" src = {item.imageUrl}/>


  <h4 className = "post-byline">made in {item.year}</h4>
  <div className = "likeanddelete">
  <button className = "like" onClick= {()=>this.handlelikingclick(item.id)}>like</button> 
    <button className = "delete" onClick= {()=>this.handledelete(item.id)} >delete</button>
    </div>
<h3 className = "post-byline">{item.likes} people liked this</h3>
  </div>)}
  </div>
  )
}
}

export default List;