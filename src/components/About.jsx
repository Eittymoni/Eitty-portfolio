import React from 'react'
import aboutEt from "../assets/about-et.png"

const About = () => {
    const info =[
        {text:"Year Experience", count:"01"},
        {text:"Completed Project", count:"10"},
        {text:"Companies Work", count:"02"},
    ]
  return (
   <section id='about' className='py-10 text-white'>
    <div className="text-center md:mt-8 ">
        <h3 className='text-4xl font-semibold'>
            About <span className='text-cyan-600'> Me</span>
        </h3>
        <p className="text-gray-400 my-3 text-lg">My introduction</p>
        <div className=' flex md:flex-row flex-col-reverse items-center  md:gap-6 gap-12 px-10 max-w-6xl mx-auto'>
            <div className=" p-2">
            <div className=" text-gray-300 my-3">
                <p className='text-justify leading-7 w-11/12 mx-auto md:text-[18px] text-[16px]'>A focused, flexible, and enthusiastic professional looking forward to working in a customer-centric environment. An organized, detail-oriented, and passionate engineer, who can easily accomplish multiple tasks without compromising on quality.</p>

                <div className='flex mt-10 items-center gap-7 '> 
                   {
                    info.map(contant =>(
                        <div key={contant.text}>
                            <h3 className='md:text-4xl text-2xl font-semibold text-white'>{contant.count} <span className='text-cyan-600'>+</span></h3>
                            <span className='md:text-base text-xs'>{contant.text}</span>

                        </div>
                    ))
                   }
                   
                </div>
                <br/>
                <br/>
                <a href="./src/assets/eitty CV.pdf " download > <button className='btn-primary mt-'> Download CV</button></a>
            </div>
            </div>
            <div className=" flex-1  md:mt-0 mt-10 flex justify-center items-center">
                   <div className=" lg:w-96 h-full relative sm:w-10/12 w-11/12 max-w-sm aboutEt">
                    <img src={aboutEt} alt="" className=' w-full object-cover bg-cyan-600 rounded-xl'/>
                   </div>
            </div>
        </div>
    </div>

   </section>
  )
}

export default About
