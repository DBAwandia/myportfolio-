import React, { useEffect, useState,useRef } from 'react'
import "./Contact.css"
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from '@emailjs/browser';
import 'animate.css';

function Contact() {
  const [ email, setEmail ] = useState("")
  const [ name, setName ] = useState("")
  const [ message, setMessage ] = useState("")
  const [ subject, setSubject ] = useState("")
  const [ loading, setLoading ] = useState(false)
  const [ enabled, setEnabled ] = useState(false)
  const [ showSuccess, setShowSuccess ] = useState(false)
  const [ showError, setShowError ] = useState(false)

  

  useEffect(()=>{
    if(name.length === 0 || email.length === 0 || message.length === 0 || subject.length === 0){
      setEnabled(true)
    }else{
      setEnabled(false)
    }
  },[enabled, name,message,email,subject])

  const form = useRef();
  const sendEmail = async(e) =>{
    e.preventDefault()
    setLoading(true)
    emailjs.sendForm('service_h7z8qd4', 'template_wl4hdrp', form.current, 'Ru9-B2y3vQ64gc1wa')
    .then((result) => {
      setLoading(false)
      setShowSuccess(true)
    }, (error) => {
      setLoading(false)
      setShowError(true)
    });
  }
  useEffect(()=>{
    setTimeout(()=>{
      setShowSuccess(false)
      setShowError(false)
    },7000)
  },[showSuccess, showError])

  return (
    <div className='Contact' id='contact'>
    <ToastContainer
    position="top-center"
    autoClose={5000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    />
{/* Same as */}
<ToastContainer />
     <TrackVisibility>
              {({ isVisible }) =>
              <div>
              <div className= {isVisible ? "animate__animated animate__backInLeft some_info" : "some_info"}>
                <h2>___</h2>
                <p>Say Hello</p>
              </div>

              <div className={isVisible ? "animate__animated animate__backInLeft info_header":"info_header"}>
                <h1>CONTACT</h1>
              </div>
              </div>
              }
      </TrackVisibility>
    <form ref={form} onSubmit={sendEmail}>
        <h1 className='contact_header'>Contact form</h1>
        <div className='contact_form'>
          <input name="user_name"  className='input1' type="text" onChange={(e)=>setName(e.target.value)} placeholder="Your Name*" required/>
          <input name="user_email" className='input2' type="Email" onChange={(e)=>setEmail(e.target.value)} placeholder="Your Email*" required/>
        </div>
        <input name="subject" className='inputs' type="text" onChange={(e)=>setSubject(e.target.value)} placeholder="Subject*" required/>
        <textarea name="message" className="textareas" placeholder='Message*' onChange={(e)=>setMessage(e.target.value)} required/>
        
        {showSuccess && <p class="animate__animated animate__bounceInLeft" style={{color:"#22c55e"}}>Success , wait for reply</p>}
        {showError && <p class="animate__animated animate__bounceInLeft" style={{color:"#ef4444"}}>Network error, retry</p>}

        <button value="Send" disabled={enabled} className='button_submit' type='submit'>{loading ? "Loading..." : "Submit"}</button>
    </form>
      
    </div>
  )
}

export default Contact
