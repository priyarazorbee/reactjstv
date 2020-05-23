import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import './Home.css';
const imgMyimageexample = require('./banner.jpg');
const divStyle = {
  width: '100%',
  height: '650px',
  backgroundImage: `url(${imgMyimageexample})`,
  backgroundSize: 'cover'  
};

class Home extends React.Component {
  state = {
    redirect: false
  }

  componentDidMount() {
    this.id = setTimeout(() => this.setState({ redirect: true }),9000)
  }

  componentWillUnmount() {
    clearTimeout(this.id)
  }

  render() {
    return this.state.redirect
      ? <Redirect to="/gallery" />
      : <div className="cComponent" style={divStyle} >
        <h1 align="center">Welcome to Digidarpan</h1>   
        <h5 align="right">Device Id:1234567890</h5>
        <h5 align="right">Contact us: info@digidarpan.com</h5>
      </div>
        
    
  }
}

export default Home;