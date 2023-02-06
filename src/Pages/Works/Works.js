import React from 'react'
import "./Works.css"
import 'animate.css';
import TrackVisibility from 'react-on-screen';

function Works() {
  return (
    <div className='works' id='works'>
      <div className='works_container'>
      <TrackVisibility>
              {({ isVisible }) =>
              <div>
              <div className= {isVisible ? "animate__animated animate__backInLeft some_info" : "some_info"}>
                <h2>___</h2>
                <p>Take a look at my</p>
              </div>

              <div className={isVisible ? "animate__animated animate__backInLeft info_header":"info_header"}>
                <h1>PROJECTS</h1>
              </div>
              </div>
              }
      </TrackVisibility>
          <div className='project_container'>
          <div className='project_image'>
            <img src='/images/krypto.png' alt='image' className='krypto_image' />
          </div>

         <TrackVisibility>
         {({ isVisible }) => <div className='project_description'>
            <h1>Cryptocurrecy tracker</h1>
            <div className='technologies'>
              <p>Technologies used</p>
              <ul>
                <li>React </li>
                <li>Node </li>
                <li>Express</li>
                <li>MongoDB</li>
              </ul>
            </div>
            <div className={isVisible ? "animate__animated animate__bounceInRight technologies_description" : "technologies_description"}>
              <ul>
                <li>Completely built with hooks and functional components</li>
                <li>Emulates time passage, and crypto prices update randomly as each "day" passes</li>
                <li>Real-time updates on Crypto price change and performance</li>
              </ul>
            </div>
            <div className='repo_live'>
              <p><a href='https://github.com/DBAwandia/kryptos.git'>Repo</a></p>
              <p><a href="https://kryptoscoin.netlify.app">Live</a></p>
            </div>
          </div>}
         </TrackVisibility>

        </div>

        {/* 2 */}
        <div className='project_container'>
          <div className='project_image'>
            <img src='/images/kryptos.png' alt='image' className='krypto_image' />
          </div>
          <TrackVisibility>
          {({ isVisible }) => <div className='project_description'>
            <h1>Admin dashboad</h1>
            <div className='technologies'>
              <p>Technologies used</p>
              <ul>
                <li>React </li>
                <li>Tables</li>
                <li>Charts</li>
              </ul>
            </div>
            <div className={isVisible ? "animate__animated animate__bounceInRight technologies_description" : "technologies_description"}>
              <ul>
                <li>Admin can perform all CRUD (Create, Read, Update and Delete any information) operations</li>
                <li>Admin Can access all important information</li>
                <li>Easy and user friendly</li>
              </ul>
            </div>
            <div className='repo_live'>
              <p><a href='https://github.com/DBAwandia/kryptoappadmin.git'>Repo</a></p>
              <p><a href='https://kryptoappadmin.netlify.app'>Live</a></p>
            </div>
          </div>}
        </TrackVisibility>
        
        </div>
        </div>
    </div>
  )
}

export default Works
