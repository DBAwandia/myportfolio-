import React, { useEffect, useState } from 'react'
import "./Contact.css"
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { axiosInstance } from '../../Components/baseURL/BaseUrl';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Contact() {
  const [ email, setEmail ] = useState("")
  const [ name, setName ] = useState("")
  const [ message, setMessage ] = useState("")
  const [ subject, setSubject ] = useState("")
  const [ loading, setLoading ] = useState(false)
  const [ enabled, setEnabled ] = useState(false)

  useEffect(()=>{
    if(name.length === 0 || email.length === 0 || message.length === 0 || subject.length === 0){
      setEnabled(true)
    }else{
      setEnabled(false)
    }
  },[enabled, name,message,email,subject])
  const handleSubmit = async(e) =>{
    e.preventDefault()
    setLoading(true)
    try{
      await axiosInstance.post("/Send/sendmail" , {
        email: email,
        username: name,
        message : message,
        phonenumber: subject
      })
      setLoading(false)
      toast.success("Sent successfully")
    }catch(err){
      setLoading(false)
      toast.error("Network error/retry")
    }
  }
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
    <form>
        <h1 className='contact_header'>Contact form</h1>
        <div className='contact_form'>
          <input  className='input1' type="text" onChange={(e)=>setName(e.target.value)} placeholder="Your Name*" required/>
          <input className='input2' type="Email" onChange={(e)=>setEmail(e.target.value)} placeholder="Your Email*" required/>
        </div>
        <input className='inputs' type="text" onChange={(e)=>setSubject(e.target.value)} placeholder="Subject*" required/>
        <textarea className="textareas" placeholder='Message*' onChange={(e)=>setMessage(e.target.value)} required/>
        <button disabled={enabled} onClick={handleSubmit} className='button_submit' type='submit'>{loading ? "Loading..." : "Submit"}</button>
    </form>
      
    </div>
  )
}

export default Contact
