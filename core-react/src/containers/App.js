import React,{Component} from 'react';
import { withRouter } from 'react-router-dom'
import { Articles,Users,Header } from 'Components'

class App extends Component {
  state = {
      users:[
          {id:1,name:'User#1'},
          {id:2,name:'User#2'}
      ]
  };



  render() {
    return (
      <div>
          <Header/>
          <Articles/>
          <Users users = {this.state.users} />
      </div>
    );
  }
}

