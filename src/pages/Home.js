import React from 'react'
import { Link } from 'react-router-dom'
import BannerImage from "../assets/home1.webp"
import '../styles/Home.css'

function Home() {
  return (
    <div className='home' style={{backgroundImage: `url(${BannerImage})`}}>
      <div className='headerContainer'>
      
        <h1>StreetRag</h1>
        <p>STREET WEAR</p>
        <Link to="/catalog">
         <button>BUY NOW</button>
        </Link>
      </div>
    </div>
  )
}

export default Home
