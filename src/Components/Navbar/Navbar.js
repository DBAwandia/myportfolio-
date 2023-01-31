import React from 'react'
import "./Navbar.css"
import { DehazeOutlined, HomeOutlined, HomeRepairServiceOutlined, LaptopOutlined, LocalPhoneOutlined, PersonOutlineOutlined } from "@mui/icons-material"
import { HashLink  } from 'react-router-hash-link';
function Navbar({setOpen}) {
  return (
    <div className='Navbar'>
      <div className='Navbar_container'>
        <HashLink to="#home">
          <div className='icons_name'>
            <HomeOutlined className='icon'/>
            <p>Home</p>
          </div>
        </HashLink>
      <DehazeOutlined className='icons'
        onClick={()=>{
          setOpen(true)
        }}
      />

      <div className='Navbar_container_objects'>
        <HashLink to="#about">
          <div className='icons_name'>
            <PersonOutlineOutlined className='icon'/>
            <p>About</p>
          </div>
        </HashLink>

        <HashLink to="#skill">
          <div className='icons_name'>
            <LaptopOutlined className='icon'/>
            <p>Skills</p>
          </div>
        </HashLink>

        <div className='icons_name'>
          <HomeRepairServiceOutlined className='icon'/>
          <p>Works</p>
        </div> <div className='icons_name'>
          <LocalPhoneOutlined className='icon'/>
          <p>Contact</p>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Navbar
