import { HomeOutlined, HomeRepairServiceOutlined, LaptopOutlined, LocalPhoneOutlined, PersonOutlineOutlined } from '@mui/icons-material'
import React from 'react'
import "./Sidebar.css"
import 'animate.css';
import { HashLink  } from 'react-router-hash-link';

function Sidebar({setOpen}) {
  return (
    <div className='Sidebar'>
        <p>© 2023 Kennedy Wandia, Inc.</p>
    <div className='togle_close_sidebar'
        onClick={()=>{
            setOpen(false)
        }}
    >
    </div>
      <div className='animate__animated animate__slideInDown SidebarNavbar_container'>
        <HashLink to="#home" onClick={()=>{
            setOpen(false)
        }}>
          <div className='icons_name_sidebar'>
            <HomeOutlined className='icon'/>
            <p>Home</p>
          </div>
        </HashLink>
        
        <HashLink to="#about" onClick={()=>{
            setOpen(false)
        }}>
          <div className='icons_name_sidebar'>
            <PersonOutlineOutlined className='icon'/>
            <p>About</p>
          </div>
        </HashLink>

        <HashLink to="#skill" onClick={()=>{
            setOpen(false)
        }}>
          <div className='icons_name_sidebar'>
            <LaptopOutlined className='icon'/>
            <p>Skills</p>
          </div>
        </HashLink>

        <HashLink to="#works" onClick={()=>{
            setOpen(false)
        }}>
          <div className='icons_name_sidebar'>
            <HomeRepairServiceOutlined className='icon'/>
            <p>Works</p>
          </div>
        </HashLink> 
        
        <HashLink to="#contact" onClick={()=>{
            setOpen(false)
        }}>
          <div className='icons_name_sidebar'>
            <LocalPhoneOutlined className='icon'/>
            <p>Contact</p>
          </div>
        </HashLink>

      </div>
    </div>
  )
}

export default Sidebar
