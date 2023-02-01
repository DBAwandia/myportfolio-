import React from 'react'
import "./Info.css"
import 'animate.css';
import TrackVisibility from 'react-on-screen';

function Info() {
  return (

    <div className='Info' id='about'>
      <div className='info_container'>
      <TrackVisibility>
              {({ isVisible }) =>
              <div>
              <div className= {isVisible ? "animate__animated animate__backInLeft some_info" : "some_info"}>
                <h2>___</h2>
                <p>Some info</p>
              </div>

              <div className={isVisible ? "animate__animated animate__backInLeft info_header":"info_header"}>
                <h1>ABOUT ME</h1>
              </div>
              </div>
              }
      </TrackVisibility>
      
        <div className='info_description'>
            <p>I'm a fullstack website developer and designer,
            with 4+ years experience in the field.I have built complex appplications and worked 
            together with other developers.
            Recently, I am a Computer Science student at <span className='university'>University of Eldoret</span>. 
            I am passionate about coding and turning ideas into reality. 
            </p>
        </div>

      </div>
    </div>
  )
}

export default Info
