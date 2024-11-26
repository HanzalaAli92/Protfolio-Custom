import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import style from "@/Components/Styles/navbar.module.css"
import { BsCloudDownload } from "react-icons/bs";

const Navbar = () => {
  return (
    <div className={style.navbar_div}>

      <header className={style.header}>

  <div className={style.header_div}>

    <a className={style.a}>
     
      <Image src={"/media/logo.jpg"}
      alt="Logo" 
      width={100} 
      height={100} 
      className={style.image}/>

      <span className={style.span}>Hanzala</span>
    </a>
    
    <nav className={style.nav}>
      <Link href="/" className={style.nav_link}>Home</Link>

      <Link href="/about" className={style.nav_link}>About</Link>

      <Link href="/project" className={style.nav_link}>Project</Link>

      <Link href="/skills" className={style.nav_link}>Skills</Link>

      <Link href="contact" className={style.nav_link}>Contact</Link>
    </nav>
    <a href="/media/My resume.pdf">
    <button className={style.button}>
     Download Cv
    <BsCloudDownload  className={style.icons}/>
    </button>
    </a>
  </div>
</header>
    </div>
  )
}

export default Navbar


{/* <div>Hanzala</div>
      <div>
        <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
      </div>
      <div></div> */}