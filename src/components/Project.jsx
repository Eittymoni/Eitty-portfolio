import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import project1 from "../assets/project1.png"
import project2 from "../assets/project2png.png"
import project3 from "../assets/project3.png"
import project4 from "../assets/project4.png"
import project5 from "../assets/project5.png"
import project6 from "../assets/project6.png"
import project7 from "../assets/project7.png"
import project8 from "../assets/project8.png"
import project9 from "../assets/project9.png"
import project10 from "../assets/project10.png"

import project_person from "../assets/project-et.png";


import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';


const Project = () => {
    const projects = [
      {
        img: project1,
        name: "Oil Company Website",
        github_link: "https://github.com/Eittymoni/Telwind-Petrol",
        live_link: "https://myreactflix.netlify.app",
      },
      {
        img: project2,
        name: " Web App",
        github_link: "https://github.com/Eittymoni/react-practice2",
        live_link: "https://ornate-haupia-db9898.netlify.app/",
      },
      {
        img: project3,
        name: "Agro Farm",
        github_link: "https://github.com/Eittymoni/Arman-try",
        live_link: "https://master--dmewokfmeowfner.netlify.app/",
      },
      {
        img: project4,
        name: "Personal Portfolio",
        github_link:
          "https://github.com/Eittymoni/react-practice",
        live_link: "coruscating-belekoy-97f84e.netlify.app",
      },
      {
        img: project5,
        name: " Country",
        github_link: "https://github.com/Eittymoni/county-flag",
        live_link: "shiny-crumble-93a889.netlify.app/",
      },
      {
        img: project6,
        name: "Coffee-shop ",
        github_link: "https://github.com/Eittymoni/Coffee-shop.git",
        live_link: "https://coffee-shope-by-eitty.netlify.app/",
      },
      {
        img: project7,
        name: "New-Year-Offer",
        github_link: "https://github.com/Eittymoni/new-year-offer.git",
        live_link: "newyearoffer-by-eitty.netlify.app/",
      },
      {
        img: project8,
        name: "Online-Flower-Shop",
        github_link: "https://github.com/Eittymoni/online-Flower-Shop.git",
        live_link: "online-flower-shop-by-eitty.netlify.app/",
      },
      {
        img: project9,
        name: "One-page-website",
        github_link: "https://github.com/Eittymoni/One-page-website.git",
        live_link: "assignment-1-by-eitty.netlify.app",
      },
      {
        img: project10,
        name: "Legal-Solution-DaisyUI",
        github_link: " https://github.com/Eittymoni/Legal-Solution-DaisyUI.git",
        live_link: "ligal-solution-by-eitty.netlify.app",
      },
    ];


  return (
   <section id='projects' className='py-10 px-3 text-white'>

    <div className='text-center'>



    <h3 className='text-4xl font-semibold'> 
                My <span className='text-cyan-600'>Projects</span>
     </h3>
            <p className='text-gray-400 mt-3 text-lg'>My awesome works </p>
    

    </div>



    <br />
      <div className="flex max-w-6xl gap-6 px-5 mx-auto items-center relative">
        <div className="lg:w-2/3 w-full">
          <Swiper
            slidesPerview={1.2}
            spaceBetween={20}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
            }}
            loop={true}
            autoplay={{
              delay: 3000,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
          >
            {projects.map((project_info, i) => (
              <SwiperSlide key={i}>
                <div className="h-fit w-full p-4 bg-slate-700 rounded-xl">
                  <img src={project_info.img} alt="" className="rounded-lg" />
                  <h3 className="text-xl my-4">{project_info.name}</h3>
                  <div className="flex gap-3">
                    <a
                      href={project_info.github_link}
                      target="_blank"
                      className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                    >
                      Github
                    </a>
                    <a
                      href={project_info.live_link}
                      target="_blank"
                      className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="lg:block hidden">
          <img src={project_person} alt="" />
        </div>
      </div>


   </section>
  )
}

export default Project
