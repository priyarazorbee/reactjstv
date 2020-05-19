import React, {Component} from 'react';

import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props){
    super(props) 
    this.state = {
      assets: [],
      index: 0, 
      timeout:1000
    }
  }
   fetchAssetObj=()=> {
    let {assets, index} = this.state;
    const context = this;
    const currentObj = this.state.assets.data.assets ? this.state.assets.data.assets[index]:null;
       
    index = index+1;
    if (!assets.data.assets || index == assets.data.assets.length){
      index =0 ;
    }
    this.setState({index:index});
    setTimeout(context.fetchAssetObj, 5000);
  }
   componentDidMount() {
    const context = this;
    fetch('./play.json')
    .then(res => res.json())
    .then((data) => {
      this.setState({ assets: data, index:0});
      setTimeout(context.fetchAssetObj, 5000);
              console.log(this.state); 
    })
    .catch(console.log)
  }

  render(){  
       
     const {assets, index} = this.state;
    
 
       return (
      
        Object.keys(this.state.object).map((key, i) => (
          <p key={i}>
            <span>Key Name: {key}</span>
            <span>Value: {assets.object[key]}</span>
          </p>
        )
      )
    );
  }
}
           
export default App;