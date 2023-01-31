import React from 'react'
import "./Works.css"
function Works() {
  return (
    <div className='works'>
      <div className='works_container'>

          <div className='some_info'>
              <h2>___</h2>
              <p>Take a look at my</p>
          </div>
          <div className='info_header'>
              <h1>PROJECTS</h1>
          </div>

          <div className='project_container'>
          <div className='project_image'>
            <img src='/images/krypto.png' alt='image' className='krypto_image' />
          </div>
          <div className='project_description'>
            <h1>Cryptocurrecy tracker</h1>
            <div className='technologies'>
              <p>Technologies used</p>
              <ul>
                <li>React js</li>
                <li>Node js</li>
                <li>Express</li>
                <li>MongoDB</li>
              </ul>
            </div>
            <div className='technologies_description'>
              <ul>
                <li>Completely built with hooks and functional components</li>
                <li>Emulates time passage, and crypto prices update randomly as each "day" passes</li>
                <li>Real-time updates on Crypto price change and performance</li>
              </ul>
            </div>
            <div className='repo_live'>
              <p>Live</p>
              <p>Repo</p>
            </div>
          </div>
        </div>

        {/* 2 */}
        <div className='project_container'>
          <div className='project_image'>
            <img src='/images/kryptos.png' alt='image' className='krypto_image' />
          </div>
          <div className='project_description'>
            <h1>Admin dashboad</h1>
            <div className='technologies'>
              <p>Technologies used</p>
              <ul>
                <li>React js</li>
                <li>Tables</li>
                <li>Charts</li>
              </ul>
            </div>
            <div className='technologies_description'>
              <ul>
                <li>Admin can perform all CRUD (Create, Read, Update and Delete any information) operations</li>
                <li>Admin Can access all important information</li>
                <li>Easy and user friendly</li>
              </ul>
            </div>
            <div className='repo_live'>
              <p>Live</p>
              <p>Repo</p>
            </div>
          </div>
        </div>


        </div>
    </div>
  )
}

export default Works
