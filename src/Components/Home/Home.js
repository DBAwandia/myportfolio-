import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import Sidebar from '../Sidebar/Sidebar'
import About from "../../Pages/About/About"
import Info from '../../Pages/Info/Info'
import "./Home.css"
import Skills from '../../Pages/Skills/Skills'
import Works from '../../Pages/Works/Works'
import Contact from '../../Pages/Contact/Contact'

function Home() {
  const [ open, setOpen ] = useState(false)
  return (
    <div className='Home' id="home">
      <div className='Home_navbar'>
        <Navbar setOpen={setOpen}/>
      </div>

      {open && <div className='home_side_bar'>
        <Sidebar setOpen={setOpen}/>
      </div>}

      <div className='Home_about'>
        <About/>
      </div>
      <div className='Home_info'>
        <Info/>
      </div>
      <div className='Home_skills'>
        <Skills/>
      </div>
      <div className='Home_works'>
        <Works/>
      </div>
      <div className='Home_contact'>
        <Contact/>
      </div>
    </div>
  )
}

export default Home
