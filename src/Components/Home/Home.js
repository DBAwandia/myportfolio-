import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import Sidebar from '../Sidebar/Sidebar'
import "./Home.css"
import About from "../../Pages/About/About"

function Home() {
  const [ open, setOpen ] = useState(false)
  return (
    <div className='Home'>
      <Navbar setOpen={setOpen}/>
      {open && <div className='home_side_bar'>
        <Sidebar setOpen={setOpen}/>
      </div>}
      <About/>
    </div>
  )
}

export default Home
