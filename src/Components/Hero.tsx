"use client"
import Image from 'next/image'
import Link from 'next/link';
import style from "@/Components/Styles/hero.module.css"
import React from 'react'
import Typewriter from 'typewriter-effect';

const Hero = () => {
  return (
<section className={style.section}>
  <div className={style.div_1a}>
    <div className={style.div_1b}>
      <h1 className={style.h1}>
        Hello.I am
        <br className={style.br}/>
        <Typewriter
        options={{
        strings: ['Muhammad Hanzala Ali','Web Developer','UI/UX Designer'],
        autoStart: true,
        loop: true,
        }}
        />
      </h1>
      <div className={style.div_2a}></div>
      <p className={style.p}>
      Welcome to my portfolio! Here, you’ll find a wide range of web services tailored to meet your needs. From dynamic website development to cutting-edge solutions in Web 3.0, I specialize in delivering high-quality projects that blend innovation with functionality. Whether you’re looking for a sleek, modern design or advanced AI-powered applications, my expertise ensures your ideas come to life with precision and creativity. Explore my work, and let’s build something extraordinary together!
      </p>
      <div className={style.div_2b}>
        <Link href={"#Contact"}>
        <button className={style.button}>
          Contact
        </button>
        </Link>
        {/* <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
          Button
        </button> */}
      </div>
    </div>
    <div className={style.div_3}>
      <Image
        className={style.image}
        alt="hero"
        width={500}
        height={500}
        src={"/media/profile.png"}
      />
    </div>
  </div>
</section>


  )
}

export default Hero
