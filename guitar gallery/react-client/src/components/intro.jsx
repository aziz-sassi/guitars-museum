import React from 'react'
class Intro extends  React.Component {
    constructor(props){
        super(props)
        this.clickMe = this.clickMe.bind(this)
    }
    clickMe () {
        this.props.viewhandler('feed')
    }
render(){
    return(<div className = "intropage">
<h2>A guitar is a very personal extension of the person playing it. You have to be emotionally and spiritually connected to your instrument. I'm very brutal on my instruments, but not all the time.
that's why i came up to you with a this web app that is bassically old and rare guitars collection you can't sell or buy here but you will enjoy watching you can like and dislike each item it's really up to you 😝, and of course you can share with us your favorite guitar and if you don't like an item you're seeing you can simply delete it 
so that's it guys have a good trip in this simple web application
</h2>
<button  className = "myintrobutton" onClick = {()=>this.clickMe()}>go to the gallery</button>
<div className="contact-us">
<h1>contact us</h1>
<a href="https://www.instagram.com/aziz_sassii/" target="blank" class="fa fa-instagram">Instagram</a>
<a href="https://www.facebook.com/aziz.sassi.16121/" target="blank" class="fa fa-facebook">Facebook</a>
<a href="https://github.com/aziz-sassi" target="blank" class="fa fa-github">Github</a>
<a href="https://www.linkedin.com/in/aziz-sassi-9a4480204/" target="blank" class="fa fa-linkedin">linkedin</a>
<a href="mailto:sassiaziz50@gmail.com" target="blank" class="fa fa-gmail">gmail</a>



</div>
    </div>)};
}
export default Intro;