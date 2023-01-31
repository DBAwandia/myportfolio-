import React from 'react'
import "./Info.css"
import 'animate.css';
import TrackVisibility from 'react-on-screen';

function Info() {
  return (

    <div className='Info' id='about'>
      <div className='info_container'>
      <TrackVisibility>
      {/* {({isVisible})=> */}
        <div className= "animate__animated animate__backInLeft some_info">
            <h2>___</h2>
            <p>Some info</p>
        </div>

        <div className='animate__animated animate__backInLeft info_header'>
            <h1>ABOUT ME</h1>
        </div>
      {/* } */}
        </TrackVisibility>
        <div className='info_description'>
            <p>I'm a fullstack web developer 
            with a background in computer systems 
            and network infrastructure. 
            My 4+ years of IT experience has given me a strong foundation
            for web development and building complex solutions. 
            Recently, I am a Computer Science student at <span className='university'>University of Eldoret</span>. 
            I am passionate about coding and solving problems through code, 
            and I am excited to work alongside other amazing programmers and learn so much more!
            </p>
        </div>

      </div>
    </div>
  )
}

export default Info
