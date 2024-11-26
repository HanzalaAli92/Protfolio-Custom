"use client"
import Image from 'next/image'
import Link from 'next/link';
import style from "@/Components/Styles/hero.module.css"
import React from 'react'
import Typewriter from 'typewriter-effect';

const Hero = () => {
  return (
<section className="text-gray-600 body-font bg-gray-100">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
        Hello.I am
        <br className="hidden lg:inline-block" />
        <Typewriter
        options={{
        strings: ['Muhammad Hanzala Ali','Web Developer','UI/UX Designer'],
        autoStart: true,
        loop: true,
        }}
        />
      </h1>
      <div className='w-[100px] h-[2px] bg-blue-700'></div>
      <p className="mb-8 leading-relaxed">
      Welcome to my portfolio! Here, you’ll find a wide range of web services tailored to meet your needs. From dynamic website development to cutting-edge solutions in Web 3.0, I specialize in delivering high-quality projects that blend innovation with functionality. Whether you’re looking for a sleek, modern design or advanced AI-powered applications, my expertise ensures your ideas come to life with precision and creativity. Explore my work, and let’s build something extraordinary together!
      </p>
      <div className="flex justify-center">
        <Link href={"#Contact"}>
        <button className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
          Contact
        </button>
        </Link>
        {/* <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
          Button
        </button> */}
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <Image
        className="object-cover object-center rounded mx-auto w-[15rem]"
        alt="hero"
        width={500}
        height={500}
        src={require("../../public/media/profile.png")}
      />
    </div>
  </div>
</section>


  )
}

export default Hero
