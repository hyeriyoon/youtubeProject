import React from 'react'
import { useParams } from 'react-router-dom'
import FetchSingle from '../components/FetchSingle'
import Related from '../components/Related'

export default function SingleVideo() {

  const {id} = useParams();

  return (
    <div className='page-single'>
      <FetchSingle id={id}/>
      <Related />
    </div>
  )
}
