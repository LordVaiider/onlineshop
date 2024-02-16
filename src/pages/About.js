import React from 'react';
import MultipleClothes from '../assets/multipleClothes.jpg';
import '../styles/About.css'

function About() {
  return (
    <div className='about'>
      <div className='aboutTop'  style={{backgroundImage: `url(${MultipleClothes})`}}></div>
      <div className='aboutBottom'>
        <h1>ABOUT US</h1>
        <p>
          StreeRag is not just an online shop, is a fashion statement
          that showcases the lystyles of young people. A fashion brand
          that was founded by the magnificent Raghma Tshambane, a young
          degree holder who neglected her studies to persue her passion
          which is fashion.
        </p>
      </div>
    </div>
  )
}

export default About
