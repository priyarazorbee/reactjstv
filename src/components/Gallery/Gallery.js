import React, {Component} from 'react';


import ReactDOM from 'react-dom';
import axios from 'axios';
class Gallery extends React.Component {
   state = {
    assets: []
  }
  componentDidMount() {
    fetch('./play.json')
    .then(res => res.json())
    .then((data) => {
      this.setState({ assets: data  })
    })
    .catch(console.log)
  }
 render() {
const data = this.state.assets.data && this.state.assets.data.assets ? this.state.assets.data.assets :[];
     console.log(this.state);
    return (
       <div className="container">
         {data.map((asset , index) => (
            <span key={asset.id}>
        <video
        height="100%" width="100%"
        autoPlay
        loop style={{zIndex:"-10"}} controls>
       <source src={asset.filename} type="video/mp4"/>
     </video>
       <div className="row">
       <div className="col-xs-2"> <img src={asset.filename} height="20%" width="40%" />
        </div>
        </div>
  </span>
        ))}
       </div>
    );
  }
}
export default Gallery;