import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import './Home.css';

const divStyle = {
  width: '100%',
  height: '100px',
  backgroundColor: `blue`,
  backgroundSize: 'cover'  
};

class Home extends React.Component {
  state = {
    redirect: false
  }

  componentDidMount() {
    this.id = setTimeout(() => this.setState({ redirect: true }),5000)
  }

  componentWillUnmount() {
    clearTimeout(this.id)
  }

  render() {
    return this.state.redirect
      ? <Redirect to="/gallery" />
      : <div>
        <div  style={divStyle}><h1 align="center" className="Head_1" >Welcome to Digidarpan</h1>   
    
      </div>
      <div className="Page">
       <h2 align="center" className="Head_2" >Player id :0000-0000-954f-86b6</h2>  
      <p align="center">Register your Player id at signage.digidarpan.com to manage</p>
      <p align="center">Connectivity Ethernet :<b>UP</b> ,DNS:<b>OK</b>, PING : <b>FAIL</b>,DHCP : <b>192.168.0.1</b></p>
      <p align="center">Server:<b>signage.digidarpan.com</b>,Status:<b>Connected</b></p>
        
      <p align="center" className="Page_4" >For any queries please contact:+91-9900884823<br/></p>
       </div>
       </div>
    
  }
}

export default Home;