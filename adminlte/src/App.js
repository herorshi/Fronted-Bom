import React, { Component } from "react";
import { Nav_head,Aside,Content,Footer,FooterSide } from './components'
import $ from 'jquery'
class App extends Component {
  state = {};
   componentDidMount(){
    $(function() {
      console.log($('.wrapper').get());
      console.log( "ready!" );
    });
      console.log("APP");
   }
  render() {
    return (
<div className="wrapper">
      <Nav_head></Nav_head>
      <Aside></Aside>
      <Content></Content>
    <Footer></Footer>
    <FooterSide></FooterSide>
    
</div>

    );
  }
}

export default App;
