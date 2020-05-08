import React, {Component} from 'react';
import Fullscreen from "react-full-screen";
import './Welcome.css';
import ReactDOM from 'react-dom';
import axios from 'axios';

class Welcome extends React.Component {
  state = {
    assets: [],
       activeMediaIndex: 0
  }

  componentDidMount() {
    fetch('./play.json')
    .then(res => res.json())
    .then((data) => {
      this.setState({ assets: data  })
   
    })
    .catch(console.log)
       setInterval(this.changeActiveMedia.bind(this), 5000);
  }
 changeActiveMedia() {
    const mediaListLength = this.props.a.length;
    let nextMediaIndex = this.state.activeMediaIndex + 1;

    if(nextMediaIndex >= mediaListLength) {
      nextMediaIndex = 0;
    }

    this.setState({ activeMediaIndex:nextMediaIndex });
  }

  renderSlideshow(){
    const ad = this.props.assets[this.state.activeMediaIndex];
    let adType = ad.adType;
    if(ad.adType.includes("image")){
      return(
        <div className="imagePreview">
          <img src={ad.filename} />
        </div>
      );
    }else if (adType.includes("video")){
      return(
        <video className="videoPreview" controls>
            <source src={ad.filename} type={adType}/>
          Your browser does not support the video tag.
        </video>
      )

    }
  }

  render(){   
    return(
      <div>
          {this.renderSlideshow()}
      </div>
    )
  }
}
export default Welcome;
