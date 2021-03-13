import React from 'react';
import ReactDOM from 'react-dom';
import $, { post } from 'jquery';
import List from './components/List.jsx';
import axios from 'axios'
import PostGuitar from './components/post.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      items: []
    }
  }

  componentDidMount() {
    axios.get('/items')
      .then(Response=>{
         this.setState({items: Response.data})
      }
      )

      }
  
  

  render () {
    return (
    <div>
          <div className="nav">
          <span className="logo"
            onClick={() => this.changeView('feed')}>
      <h2>guitar museum</h2>
          </span>
      

        </div>
      <List items={this.state.items}/>
      <PostGuitar/>
    </div>

    )
  }
  };

ReactDOM.render(<App />, document.getElementById('app'));