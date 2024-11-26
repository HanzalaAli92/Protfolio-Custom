import React from 'react'
import style from "@/Components/Styles/contact.module.css"

const Contact = () => {
  return (
<div id='Contact'>
<section className={style.section}>
  <div className={style.div_1a}>
    <div className={style.div_1b}>
      <iframe
        width="100%"
        height="100%"
        className={style.map}
        frameBorder={0}
        title="map"
        marginHeight={0}
        marginWidth={0}
        scrolling="no"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2857.7830488661675!2d67.11683339999999!3d25.0076508!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb346dd43717689%3A0xe6786e0953f8d2a2!2sMashriqi%20Cooperative%20Housing%20Society!5e1!3m2!1sen!2s!4v1731622259291!5m2!1sen!2s"
        style={{ filter: "contrast(1.2) opacity(0.4)" }}
      />
      <div className={style.div_2a}>
        <div className={style.div_2b}>
          <h2 className={style.div_2_h2a}>
            ADDRESS
          </h2>
          <p className={style.div_2_pa}>
          Al Mashriq Chs Sector 52 A Gulzar E Hijri Scheme 33, Karachi, Karachi City, Sindh, Pakistan 
          </p>
        </div>
        <div className={style.div_2c}>
          <h2 className={style.div_2_h2a}>
            EMAIL
          </h2>
          <a className={style.a}>hanzalaali20@gmail.com</a>
          <h2  className={style.div_2_h2b}>
            PHONE
          </h2>
          <p className={style.div_2_pb}>123-456-7890</p>
        </div>
      </div>
    </div>
    <div className={style.div_3}>
      <h2 className={style.div_3_h2}>
         Contact
      </h2>
      <p className={style.div_3_p}>
        feel free to contact
      </p>
      <div className={style.div_4}>
        <label htmlFor="name" className={style.div_4_label}>
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className={style.div_4_input}
        />
      </div>
      <div className={style.div_4}>
        <label htmlFor="email" className={style.div_4_label}>
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className={style.div_4_input}
        />
      </div>
      <div className={style.div_4}>
        <label htmlFor="message" className={style.div_4_label}>
          Message
        </label>
        <textarea
          id="message"
          name="message"
          className={style.div_4_text}
          defaultValue={""}
        />
      </div>
      <button className={style.div_4_button}>
        Send Message
      </button>
      {/* <p className="text-xs text-gray-500 mt-3">
        Chicharrones blog helvetica normcore iceland tousled brook viral
        artisan.
      </p> */}
    </div>
  </div>
</section>
</div>
  )
}

export default Contact
