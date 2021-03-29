// import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import React from 'react';
import ReactDOM from 'react-dom';
import List from './components/List.jsx';
import axios from 'axios'
import PostGuitar from './components/post.jsx';
import intro from './components/intro.jsx'
import Intro from './components/intro.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      items: [],
      view : ""
    }
    this.changeView = this.changeView.bind(this);
    this.renderView = this.renderView.bind(this)
  }

  componentDidMount() {
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
        const {view,data,index} = this.state;
        if (view === 'feed') {
          return <List items={this.state.items}/>
        } else if (view === 'post'){
          
            return <PostGuitar/> 
          
          
        }
        else if (view==="") {
          return <Intro/>
        }
      }

      
  
  

  render () {
    return (
    <div>
          <div className="nav">
          <span className="logo"
            onClick={() => this.changeView('')}>
      <h2>guitar museum</h2>
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