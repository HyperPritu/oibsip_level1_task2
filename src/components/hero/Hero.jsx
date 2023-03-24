import React from 'react'
import './hero.css'

const Hero = () => {
  return (
    <section className='hero'>
      <div className="hero__container flex">
        <div className="hero__body flex">
          <h2>Hi, I'm</h2>
          <h1>John Doe</h1>
          <p>Software Developer</p>
        </div>
        <div className="hero__image"><img src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" /></div>
      </div>
    </section>
  )
}

export default Hero