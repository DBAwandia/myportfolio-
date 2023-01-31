import React from 'react'
import "./Skills.css"
function Skills() {
  const data = [
    {
      image: "https://res.cloudinary.com/wandia/image/upload/v1675150269/html_clyoo0.svg",
      name:"HTML"
    },
    {
      image: "https://res.cloudinary.com/wandia/image/upload/v1675150283/css_gv2ew2.svg",
      name:"CSS"
    },
    {
      image: "https://res.cloudinary.com/wandia/image/upload/v1675150301/javascript_offbvs.svg",
      name:"Javacsript"
    },
    {
      image: "https://res.cloudinary.com/wandia/image/upload/v1675150312/react_wgdart.svg",
      name:"React"
    },
    {
      image: "https://res.cloudinary.com/wandia/image/upload/v1675150391/dns_vncrbx.svg",
      name:"DNS"
    },
    {
      image: "https://res.cloudinary.com/wandia/image/upload/v1675150347/git_u2skmb.svg",
      name:"Git"
    }
    ,
    {
      image: "https://res.cloudinary.com/wandia/image/upload/v1675166272/api_etnf9g.svg",
      name:"REST"
    }
    ,
    {
      image: "https://res.cloudinary.com/wandia/image/upload/v1675150347/git_u2skmb.svg",
      name:"M365"
    }
    ,
    {
      image: "https://res.cloudinary.com/wandia/image/upload/v1675166258/sass_ut2xdr.svg",
      name:"Sass"
    }
    ,
    {
      image: "https://res.cloudinary.com/wandia/image/upload/v1675166286/network_v7shtm.svg",
      name:"Networks"
    },
    {
      image: "https://res.cloudinary.com/wandia/image/upload/v1675150366/vscode_nfqeaa.svg",
      name:"Vs code"
    },
    {
      image: "https://res.cloudinary.com/wandia/image/upload/v1675150352/firebase_iegpuk.svg",
      name:"Firebase"
    },
    {
      image: "https://res.cloudinary.com/wandia/image/upload/v1675150440/xt3qabac9bxnskdvofx0.jpg",
      name:"MongoDB"
    }
  ]
  return (
    <div className='Skills' id='skill'>
      <div className='Skills_container'>
      <div className='some_info'>
            <h2>___</h2>
            <p>check out my</p>
        </div>

        <div className='info_header'>
            <h1>SKILLS</h1>
        </div>

        <div className='skills_description'>
          <div className='skills_descriptions'>
            {data?.map((item,i)=>(
            <div className='skills_objects' key={i}>
              <div className='skills_object_container'>
                <img className='skill_image' src={item?.image} alt="images" />
                <p>{item?.name}</p>
              </div>
            </div>))}
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Skills
