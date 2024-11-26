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
            src={require("../../public/media/pic-1.png")}
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
            <Link
            target='_blank'
            href={"https://hanzala-responsive.vercel.app/"}>
            <p className={style.p2}>View Project..</p>
            </Link>
          </div>
        </div>
      </div>
      
      <div className={style.project_div3}>
        <div className={style.project_div4}>
          <Image
            alt="gallery"
            className={style.image1}
            src={require("../../public/media/pic-7.png")}
          />
          <div className={style.project_div5}>
            <h2 className={style.h2a}>
            Food Card Projects
            </h2>
            <h1 className={style.h1b}>
            Food Card Restuarant
            </h1>
            <p className={style.p1}>
            A Next.Js-based food card built with HTML and TailwindCSS, allowing users to showcase their skills dynamically.
            </p>
            <Link
            target='_blank'
            href={"https://tailwind-css-zeta-sandy.vercel.app/"}>
            <p className={style.p2}>View Project..</p>
            </Link>
          </div>
        </div>
      </div>

      <div className={style.project_div3}>
        <div className={style.project_div4}>
          <Image
            alt="gallery"
            className={style.image1}
            src={require("../../public/media/pic-8.png")}
          />
          <div className={style.project_div5}>
            <h2 className={style.h2a}>
            The Suit Gallery Projects
            </h2>
            <h1 className={style.h1b}>
            The Suit Gallery
            </h1>
            <p className={style.p1}>
            A Next.Js-based the suit gallery built with HTML and CSS, allowing users to showcase their skills dynamically.
            </p>
            <Link
            target='_blank'
            href={"https://custom-css-tau.vercel.app/"}>
            <p className={style.p2}>View Project..</p>
            </Link>
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
