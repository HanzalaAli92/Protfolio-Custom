import Image from 'next/image'
import Link from 'next/link'
import style from "@/Components/Styles/about.module.css"
import React from 'react'

const About = () => {
  return (
    <div id='About'>
      <section className={style.about}>
  <div className={style.about_div}>
    <div className={style.about_divs}>
      <Image
        className={style.image}
        alt="hero"
        src={require("../../public/media/profile.png")}
        width={300}
        height={500}
      />
    </div>
    <div className={style.about1}>
      <h1 className={style.h1}>
        About Me
        {/* <br className="hidden lg:inline-block" />
        readymade gluten */}
      </h1>
      <p className={style.p}>
      I am a student at GIAIC, pursuing a course in Artificial Intelligence, web 3.0, & Metaverse. Passionate about technology and constantly learning new skills to stay up-to-date with the latest innovations.
      </p>
      <div className={style.about2}>
        <Link href={"/media/My resume.pdf"}>
        <button className={style.button}>
          View Cv
        </button>
        </Link>
        {/* <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
          Button
        </button> */}
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default About
