import React from 'react'
import "./About.css"
import { GitHub, LinkedIn, Twitter } from "@mui/icons-material"
import 'animate.css';
import TrackVisibility from 'react-on-screen';


function About() {
  let image="https://media.licdn.com/dms/image/D4D03AQFNymxm28bW-g/profile-displayphoto-shrink_200_200/0/1675019660312?e=1686787200&v=beta&t=AXXqH3s6BYlxw-2MmCIts6pNe8QpXIJOnxd2y5ik30g"
  
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
              <a href="https://drive.google.com/file/d/13PX1RrCOlJq0NozR-R5RYYm1o4q6hQs7/view?usp=share_link">
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
