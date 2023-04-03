import React, { useEffect, useState } from 'react'

export default function FetchSingle() {
  const [single, setSingle] = useState();
  
  useEffect(()=>{
    fetch('data/videoById.json')
      .then((res)=>res.json())
      .then((data)=>{
        setSingle(data.items[0]);
       
      })
  },[])
  console.log(single);
  return (
    <div className='single-video'>
      {/* <img src={single.snippet.thumbnails.high.url} alt="" />
      <h2>{single.snippet.title}</h2>
      <h3>{single.snippet.channelTitle}</h3>
      <p>{single.snippet.description}</p> */}

    </div>
  )
}
