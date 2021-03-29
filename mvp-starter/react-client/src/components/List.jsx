import axios from 'axios';
import React from 'react';
import PostGuitar from './post.jsx';

class List extends React.Component {
constructor(props){
super(props)


this.handlereducelikes = this.handlereducelikes.bind(this);
this.handledelete = this.handledelete.bind(this);
this.handlelikes =this.handlelikes.bind(this);
}
handledelete(id){
axios.delete('/deleteitems/'+id,[this.props.items])

.then(response=>{
  console.log(response)
  this.setState({[this.props.items]:response.data})
})
.catch(err=>{
  throw err;
})
}
handlelikes(id){
  axios.patch(`/likesupdate/`+id)

  .then(response=>{
    console.log(response)
  })
  .catch(err=>{
    throw err;
  })
}
handlereducelikes(id){
  axios.patch(`/likesdelete/`+id)

  .then(response=>{
    console.log(response)
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
  <h3 className = "post-byline">made in {item.year}</h3>
  <button className = "post-byline" onClick= {()=>this.handlelikes(item.id)}> like</button> 
  <button className = "post-byline" onClick = {this.handlereducelikes(item.id)}>dislike</button>

  <h3 className = "post-byline">{item.likes} people liked this</h3>
  <button className = "post-byline" onClick= {()=>this.handledelete(item.id)} >delete</button>
    </div>)}
  </div>
  )
}
}

export default List;