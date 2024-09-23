import React from 'react'
import heroEt from "../assets/hero-eitty.png"
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";



const Hero = () => {
    const social_media=[
        'logo-facebook',
        'logo-instagram',
        'logo-linkedin',
        'logo-twitter',
    ]
  return (
    <section id='home' className=' min-h-screen flex py-10 md:flex-row flex-col items-center'>
        <div className='flex-1 flex justify-center items-center h-full'>
            <img src={heroEt} alt=""  className=' md:w-11/12 h-full object-cover'/>
        </div>
        <div className='flex-1'>
            <div className=' md:text-left text-center' >
                <h1 className='md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold mt-1'>
                    <span className='text-cyan-600 md:text-6xl text-5xl'>
                        Hello!
                        <br/>
                    </span>
                    My Name is <span> Dilruba Yasmin Eitty</span>
                </h1>
                <h4 className='md:text-2xl text-1g md:leading-normal leading-5 mt-4 font-bold text-gray-600 '> Computer Engineer & Frontend Developer</h4>
                <button className='btn-primary mt-8'> Contact Me</button>
                <div className=' mt-8 text-3xl flex items-center md:justify-start justify-center gap-5'>
                {social_media?.map((icon) => (
              <div
                key={icon}
                className="text-gray-600 hover:text-white cursor-pointer "
              >
                <ion-icon name={icon}> </ion-icon>
                
              </div>
            ))}
              
         

                   
                </div>
            </div>
        </div>
     
    </section>
  )
}

export default Hero
