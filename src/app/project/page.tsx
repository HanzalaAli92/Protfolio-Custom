import React from 'react'
import Image from 'next/image'
import style from "@/Components/Styles/project.module.css"
import Link from 'next/link'

const Project = () => {
  return (
    <div id='Project'>
      <section className={style.section}>
  <div className={style.project_div}>
    <div className={style.project_div1}>
      <h1 className={style.h1a}>
        My Projects
      </h1>
    </div>
    <div className={style.project_div2}>
        {/* Project Section */}
      <div className={style.project_div3}>
        <div className={style.project_div4}>
          <Image
            alt="gallery"
            className={style.image1}
            src={("/media/pic-1.png")}
            width={500}
            height={300}
          />
          <div className={style.project_div5}>
            <h2 className={style.h2a}>
            Static Interctive Resume Projects
            </h2>
            <h1 className={style.h1b}>
            Static Interctive Resume
            </h1>
            <p className={style.p1}>
            A TypeScript-based interactive resume built with HTML and CSS, allowing users to showcase their skills dynamically.
            </p>
          </div>
        </div>
      </div>

      <div className={style.project_div3}>
        <div className={style.project_div4}>
          <Image
            alt="gallery"
            className={style.image1}
            src={("/media/pic-2.png")}
            width={500}
            height={300}
          />
          <div className={style.project_div5}>
            <h2 className={style.h2a}>
            Countdown Timer Projects
            </h2>
            <h1 className={style.h1b}>
            Countdown Timer
            </h1>
            <p className={style.p1}>
            A Next.js and TypeScript powered website to track with an interactive countdown feature.
            </p>
          </div>
        </div>
      </div>

      <div className={style.project_div3}>
        <div className={style.project_div4}>
          <Image
            alt="gallery"
            className={style.image1}
            src={("/media/pic-3.png")}
            width={500}
            height={300}
          />
          <div className={style.project_div5}>
            <h2 className={style.h2a}>
            Todo List Projects
            </h2>
            <h1 className={style.h1b}>
            Todo List
            </h1>
            <p className={style.p1}>
            A React & TypeScript based app for managing and organizing your tasks efficiently.
            </p>
          </div>
        </div>
      </div>

      <div className={style.project_div3}>
        <div className={style.project_div4}>
          <Image
            alt="gallery"
            className={style.image1}
            src={("/media/pic-4.png")}
            width={500}
            height={300}
          />
          <div className={style.project_div5}>
            <h2 className={style.h2a}>
            Weather Widget Projects
            </h2>
            <h1 className={style.h1b}>
            Weather Widget
            </h1>
            <p className={style.p1}>
            A Next.js and TypeScript based tool for fetching and displaying real-time weather data.
            </p>
          </div>
        </div>
      </div>


      <div className={style.project_div3}>
        <div className={style.project_div4}>
          <Image
            alt="gallery"
            className={style.image1}
            src={("/media/pic-5.png")}
            width={500}
            height={300}
          />
          <div className={style.project_div5}>
            <h2 className={style.h2a}>
            Simple Calculator App Projects
            </h2>
            <h1 className={style.h1b}>
            Simple Calculator App
            </h1>
            <p className={style.p1}>
            A basic HTML and TypeScript calculator for performing essential arithmetic operations.
            </p>
            {/* <Link
            target='_blank'
            href={"https://hanzala-responsive.vercel.app/"}>
            <p className={style.p2}>View Project..</p>
            </Link> */}
          </div>
        </div>
      </div>

      <div className={style.project_div3}>
        <div className={style.project_div4}>
          <Image
            alt="gallery"
            className={style.image1}
            src={("/media/pic-6.png")}
            width={500}
            height={300}
          />
          <div className={style.project_div5}>
            <h2 className={style.h2a}>
            Currency Converter Projects
            </h2>
            <h1 className={style.h1b}>
            Currency Converter
            </h1>
            <p className={style.p1}>
            A simple HTML and TypeScript powered tool for converting currencies with real-time rates
            </p>
          </div>
        </div>
      </div>
      
      
     
      {/* <div className={style.div_1}>
        <div className={style.project_div4}>
          <img
            alt="gallery"
            className={style.image1}
            src="https://dummyimage.com/605x365"
          />
          <div className={style.project_div5}>
            <h2 className={style.h2a}>
              THE SUBTITLE
            </h2>
            <h1 className={style.h1b}>
              Holden Caulfield
            </h1>
            <p className={style.p3}>
              Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
              microdosing tousled waistcoat.
            </p>
          </div>
        </div>
        </div>
      <div className={style.div_1}>
        <div className={style.project_div4}>
          <img
            alt="gallery"
            className={style.image1}
            src="https://dummyimage.com/606x366"
          />
          <div className={style.project_div5}>
            <h2 className={style.h2a}>
              THE SUBTITLE
            </h2>
            <h1 className={style.h1b}>
              Alper Kamu
            </h1>
            <p className={style.p3}>
              Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
              microdosing tousled waistcoat.
            </p>
          </div>
        </div>
      </div> */}
    </div>
  </div>
</section>

    </div>
  )
}

export default Project

