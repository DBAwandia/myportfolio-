import React from 'react'
import "./About.css"
import { GitHub, LinkedIn, Twitter } from "@mui/icons-material"
import 'animate.css';
import TrackVisibility from 'react-on-screen';


function About() {
  let image="/images/portfolio.png"
  return (
    <div className="About" id='home'>
      <div className='About_container'>
        <div className='image_container'>
          <img src={image} alt="image" className="profile_img" />
        </div>
        <div className='description_container'>
          <TrackVisibility>
          {({isVisible})=> 
            <div className='header'>
            <p>HI THERE! I'M</p>
           <div className={isVisible ? "animate__animated animate__backInRight names" : "names"}>
              <p>WANDIA</p>
              <span>KENNEDY</span>
            </div>

            <div className='description'>
              <p>A <span>Fullstack Web Developer</span>
                    passionate about creating 
                    customized ,user-friendly websites
                    and applications using advanced 
                    technologies.
              </p>
            </div>
            <div className='button_container'>
              <a href="/files/Resume.pdf" download>
                <button className='animate__animated animate__rubberBand resume'>
              Resumé
              </button>
              </a>
             <div className="animate__animated animate__fadeInBottomLeft iconz">
              <a href='https://www.linkedin.com/in/kennedy-wandia-618684216'>
                <div className='icon_background'>
                  <LinkedIn className='About_icon'/>
                </div>
              </a>

              <a href='https://twitter.com/keniko1297'>
                <div className='icon_background'>
                  <Twitter className='About_icon'/>
                </div>
              </a>

              <a href='https://github.com/DBAwandia'>
                <div className='icon_background'>
                  <GitHub className='About_icon'/>
                </div>
              </a>
              
              </div>
            </div>

          </div>}
        </TrackVisibility>
        </div>
      </div>
    </div>
  )
}

export default About
