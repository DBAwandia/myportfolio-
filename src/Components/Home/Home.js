import React, { useState,useEffect } from 'react'
import Navbar from '../Navbar/Navbar'
import Sidebar from '../Sidebar/Sidebar'
import About from "../../Pages/About/About"
import Info from '../../Pages/Info/Info'
import "./Home.css"
import Skills from '../../Pages/Skills/Skills'
import Works from '../../Pages/Works/Works'
import Contact from '../../Pages/Contact/Contact'
import 'animate.css';

function Home() {
  const [ open, setOpen ] = useState(false)

     // show and hide Footbar
     const [show, setShow] = useState(true);
     const [lastScrollY, setLastScrollY] = useState(0);
   
     const controlNavbar = () => {
       if (typeof window !== 'undefined') { 
         if (window.scrollY < lastScrollY) { // if scroll up hide the navbar
           setShow(true); 
         } else { // if scroll down show the navbar
           setShow(false);  
         }
   
         // remember current page location to use in the next move
         setLastScrollY(window.scrollY); 
       }
     };
   
     useEffect(() => {
       if (typeof window !== 'undefined') {
         window.addEventListener('scroll', controlNavbar);
   
         // cleanup function
         return () => {
           window.removeEventListener('scroll', controlNavbar);
         };
       }
     }, [lastScrollY]);

  return (
    <div className='Home' id="home">
      <div className={show ? "small_screen showFootbarOnscrollCss animate__animated animate__slideInDown lg:hidden w-full z-[999999999999999999999999999]" : "small_screen animate__animated animate__slideInUp hideFootbarOnscrollCss lg:hidden w-full z-[999999999999999999999999999]" }>
        <Navbar setOpen={setOpen}/>
      </div>

      <div className='large_screen'>
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
      <div className='Home_footer'>
        <p>© 2023 Kennedy Wandia, Inc.</p>
      </div>
    </div>
  )
}

export default Home
