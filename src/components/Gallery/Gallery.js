import React , { useState, useEffect, useReducer } from 'react';


let asset = null;

export default function Gallery() {
  
  const [index, setIndex] = useState(-1);
  const [startTimtOut, setStartTimtOut] = useState(false);

  const [timeoutObj, setTimeoutObj] = useState(0);
  let timeObj = 0;
  useEffect(() => {
    getPlaylistData()

  },[]);
  async function getPlaylistData (dispatch) {

    const response = await fetch('./play.json');
    let json = null;
    try{
      json = await response.json();
    }catch(r){
      alert(' json file not found')
    }
    if (json && json.data && json.data.assets){
      asset = json.data.assets;

    }
  }


  const next=(index)=>{
    if (timeoutObj) {clearTimeout(timeoutObj); setTimeoutObj(0)};
    if (!asset){
      timeObj = setTimeout(function() { next()}, 1000);
      setTimeoutObj(timeObj)
    }else{


      index = (index !==undefined)? index: 0;
      setIndex(index);
      index = index+1;
      if ( index== asset.length){
        index = 0;
      }
      
      timeObj = setTimeout(function() { next(index)}, 5000);
      setTimeoutObj(timeObj)
    }
  }
  const startTimer = ()=>{
    if (!startTimtOut){
      setStartTimtOut(true);
      next();
    }
  }
  return (
    <>{
      console.log(asset)
    }

   {asset && asset[index] && (<div>{index} :::{asset[index].filename} </div>)}
   
   {startTimer()}
    </>
  );
}