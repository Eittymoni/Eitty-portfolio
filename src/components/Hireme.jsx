import React from 'react'
import hiremeImg from "../assets/hiremeEt.png"

const Hireme = () => {
  return (
    <section id='hireme' className='py-10 px-3 text-white'>
        <div className="text-center">


            <h3 className='text-4xl font-semibold'> 
                Hire <span className='text-cyan-600'>Me</span>
            </h3>
            <p className='text-gray-400 mt-3 text-lg'>Do you have any work? </p>
        </div>
        <div className=" bg-gray-700 relative px-8 rounded-2xl py-5 lg:max-w-4xl mx-auto min-h-[24rem] mt-24 flex gap-6 lg:flex-row flex-col-reverse items-center">
            <div className="">
                <h2 className='text-2xl font-semibold'> Do you want any Work from me?</h2>
                <p className='lg:text-left text-justify max-w-lg text-sm mt-4 text-gray-200 leading-6'>
                I'm an emerging front-end developer with a foundational understanding of UI/UX design principles and SEO fundamentals. I have demonstrated experience in responsive web design and growing proficiency in JavaScript, CSS, and  React frameworks. I am committed to enhancing user experience and eager to apply problem-solving skills to tackle front-end challenges and contribute to team success.</p>
                <button className='btn-primary mt-10'>Say Hello</button>
            </div>
            
                <img src={hiremeImg} alt=""  className='lg:h-[32rem] h-80 lg:absolute bottom-0 right-3 object-cover'/>
         
        </div>

    </section>
  )
}

export default Hireme
