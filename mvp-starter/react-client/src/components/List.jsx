import axios from 'axios';
import React from 'react';
import PostGuitar from './post.jsx';

class List extends React.Component {
constructor(props){
super(props)

this.handlelikes = this.handlelikes.bind(this)
// this.ptchy=this.ptchy.bind(this)
}
handlelikes(id){
axios.delete('/deleteitems/'+id,[this.props.items])

.then(response=>{
  console.log(response)
  this.setState({[this.props.items]:response.data})
})
.catch(err=>{
  throw err;
})
}
  // ptchy(id){
  //   axios.patch(`/likesupdate/${id}`,{likes:this.state.liky})
  //   .then(response=>{
  //     console.log(response)
      
  //   })
  //   .catch(err=>{
  //     console.log(err)
  //   })
  // }
  


render() {
  return(
    <div>
    <h4> List of rare guitars </h4>
    There are { this.props.items.length } items.
    { this.props.items.map(item =><div key = {item.id}>
      <h3>{item.model}</h3>

  <img src = {item.imageUrl}/>
  <h3>made in {item.year}</h3>
  <button onClick= {()=>this.handlelikes(item.id)} >delete</button>
    </div>)}
  </div>
  )
}
}

export default List;