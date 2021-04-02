// import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';
import List from './components/List.jsx';
import axios from 'axios'
import PostGuitar from './components/post.jsx';
import Intro from './components/intro.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      items: [],
      view : ""
    }
    this.changeView = this.changeView.bind(this);
    this.renderView = this.renderView.bind(this);
    this.update = this.update.bind(this)
  }

  componentDidMount() {
    axios.get('/items')
      .then(Response=>{
         this.setState({items: Response.data})
      }
      )

      }
      update(){
        axios.get('/items')
        .then(Response=>{
           this.setState({items: Response.data})
        }
        )
      }
      changeView(option) {
        this.setState({
          view: option
        });
      }
      renderView() {
        const {view} = this.state;
        if (view === 'feed') {
          return <List items={this.state.items} updater = {this.update}/>
        } else if (view === 'post'){
          
            return <PostGuitar updater = {this.update} gotoitems = {this.changeView}/> 
          
          
        }
        else if (view==="") {
          return <Intro  viewhandler = {this.changeView}/>
        }
      }

      
  
  

  render () {
    return (
    <div>
          <div className="nav">
          <span className="logo"
            onClick={() => this.changeView('')}>
      <h2 className = "pagelogo">Guitar Gallery</h2>
          </span>
          <span className={this.state.view === 'feed'
            ? 'nav-selected'
            : 'nav-unselected'}
            onClick={() => this.changeView('feed')}><button className = "mybutton">See all Posts</button>
            
          </span>
          <span onClick={() => this.changeView('post')}>
          <button className = "mybutton">Post an item</button>
            
          </span>
      

        </div>
        {this.renderView()}
    </div>

    )
  }
};

ReactDOM.render(<App />, document.getElementById('app'));