 import React from 'react'
 import Link from 'next/link';
 import Image from 'next/image';
 import style from "@/Components/Styles/footer.module.css"
 import { BsFacebook , BsGithub , BsLinkedin , BsInstagram } from "react-icons/bs";

 
 const Footer = () => {
   return (
     <div className={style.footer_div}>
       <footer className={style.footer}>
  <div className={style.footer_divs}>
    <a className={style.a}>
    <Image src={require("../../public/media/logo.jpg")}
      alt="Logo" 
      width={100} 
      height={100} 
      className={style.image}/>

      <span className={style.span}>Hanzala</span>
    </a>
    <p className={style.p}>
      © 2024 Hanzala

    </p>
    <span className={style.span1}>
      <Link 
      target='_blank'
      href="" 
      className={style.link}>
      <BsFacebook className={style.icons1}  />
      </Link>
      <Link
       target='_blank'
       href=""
       className={style.link}>
      <BsInstagram className={style.icons2}/>
      </Link>
      <Link
      target='_blank'
       href="https://www.linkedin.com/in/muhammad-hanzala-ali-5897172ba/" 
       className={style.link}>
      <BsLinkedin className={style.icons3} />
      </Link>
      <Link
      target='_blank'
       href="https://github.com/HanzalaAli92?tab=repositories" 
       className={style.link}>
      <BsGithub className={style.icons4}/>
      </Link>
    </span>
  </div>
</footer>

     </div>
   )
 }
 
 export default Footer
 