import axios from 'axios';
import React from 'react';
class PostGuitar extends React.Component{
  constructor(props){
    super(props)
    this.state={
    model : "",
    imageUrl : "",
    year : 0,
    likes : 0
    }
    this.handlemodelChange = this.handlemodelChange.bind(this);
    this.handleimagechange = this.handleimagechange.bind(this);
    this.handleyearchange = this.handleyearchange.bind(this);
    this.clickhandle = this.clickhandle.bind(this)
  }

  handlemodelChange(e) {
    this.setState({ model: e.target.value });
  }
  handleimagechange(e){
    this.setState({imageUrl:e.target.value})
  }
  handleyearchange(e){
    this.setState({year: e.target.value,
    likes : 0})
  }
  clickhandle(e){
    e.preventDefault();
    if (this.state.model.length===0) {
      console.log("you need to insert in all the inputs!")
      return;
    }
    else if (this.state.imageUrl.length===0) {
      console.log("you need to insert in all the inputs!")

      return;
    }
    else if (this.state.year.length===0) {
      console.log("you need to insert in all the inputs!")

      return;
    }
    console.log(this.state);
    const {model,imageUrl,year,likes} = this.state
    console.log(model)
    axios.post('/postguitar',{ model, imageUrl , year , likes})
    .then(res => {
      console.log(res);
      console.log(res.data);
    })
  }
  render(){
    return(
      <div>
<h2>post your guitar</h2>
<h4>your guitar model:</h4>
<input type = "text" id = "modelinput" onChange = {this.handlemodelChange}/>
<h4>your imageUrl:</h4>
<input type = "text" id = "imageUrlinput" onChange = {this.handleimagechange}/>
<h4>the year your guitar was made:</h4>
<input type = "number" id = "yearinput" onChange = {this.handleyearchange}/>
<br/>
<br/>
<button type = 'submit' onClick = {this.clickhandle}>post item</button>

    </div>
    )
  }
}



export default PostGuitar;