import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from '../components/Header'
import Home from '../pages/Home'
import SingleVideo from '../pages/SingleVideo.jsx'
import PageNotFound from '../pages/PageNotFound.jsx'
import '../App.css'

export default function AppRouter() {
  return (
    <BrowserRouter>
      <div className='wrapper'>
        <Header />
        <main>
          <Routes>
            <Route path='/' exact element={<Home />} />
            <Route path='/video/:id' element={<SingleVideo />} />
            <Route path='*' element={<PageNotFound />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}
