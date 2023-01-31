import React from 'react'
import "./About.css"
import { GitHub, LinkedIn, Twitter } from "@mui/icons-material"
import 'animate.css';

function About() {
  let image="https://media.licdn.com/dms/image/D4D03AQFNymxm28bW-g/profile-displayphoto-shrink_200_200/0/1675019660312?e=1680739200&v=beta&t=pmhbuxC_h6fGe3MIZAOcKg_TBVMkFzam_E1M22LYlBA"
  return (
    <div className="About" id='home'>
      <div className='About_container'>
        <div className='image_container'>
          <img src={image} alt="image" className="profile_img" />
        </div>
        <div className='description_container'>
          <div className='header'>
            <p>HI THERE! I'M</p>
            <div className='animate__animated animate__backInRight names'>
              <p>WANDIA</p>
              <span>KENNEDY</span>
            </div>

            <div className='description'>
              <p>A <span>Fullstack Web Developer</span>
                    passionate about creating 
                    customized highly responsive, 
                    easy to use, user-friendly websites
                    and applications using advanced 
                    technologies.
              </p>
            </div>

            <div className='button_container'>
                <button className='animate__animated animate__rubberBand  resume'>Resume</button>
              <div className='iconz'>
                <div className='icon_background'>
                  <LinkedIn className='About_icon'/>
                </div>
                <div className='icon_background'>
                  <Twitter className='About_icon'/>
                </div>
                <div className='icon_background'>
                  <GitHub className='About_icon'/>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default About
