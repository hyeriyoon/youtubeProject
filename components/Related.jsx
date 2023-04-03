import React, {useState, useEffect} from 'react'

export default function Related() {
  const [relatedV, setRelatedV] = useState([]);
  useEffect(()=>{
    fetch('data/listByRelatedVideo.json')
        .then((res)=>res.json())
        .then((data)=>{
          console.log(data.items)
          setRelatedV(data.items)
        })
  },[])
  
  return (
    <ul className='related-box'>
      {relatedV.map((video)=>
        <div key={video.id.videoId} className='related-unit'>
          <img src={video.snippet.thumbnails.high.url} alt="" />
          <div className='related-unit-des'>
            <h3 className='related-title'>{video.snippet.title}</h3>
            <p className='related-channel-title'>{video.snippet.channelTitle}</p>
          </div>
          
        </div>
      )}
      
    </ul>
  )
}
