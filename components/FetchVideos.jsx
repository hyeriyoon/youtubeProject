import React, { useEffect, useState } from 'react'
import {Link, useParams} from 'react-router-dom'
import SingleVideo from '../pages/SingleVideo';
import {mostPopular} from '../data/globalVariables.js';


export default function FetchVideos() {
  const [video, setVideo] = useState([]);

  useEffect(() => {
    fetch('data/mostPopularVideo.json')
      .then((res) => res.json())
      .then((data) => {
        console.log(data.items)
        setVideo(data.items)
        });
  },[])
  
  const { id } = useParams();
  

  return (
      <ul className='video-box'>
        {video.map((item) => 
          <div key={item.id} className='video-unit'>
            <Link to={`/${id}`}>
              <img src={item.snippet.thumbnails.high.url} alt="" />
              <h3 className='video-title'>{item.snippet.title}</h3>
            </Link>
            
            <p className='channel-title'>{item.snippet.channelTitle}</p>
          </div>
        )}
      </ul>
  )
}
