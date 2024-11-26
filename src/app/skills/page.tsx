import React from 'react'
import style from "@/Components/Styles/skills.module.css"
import { FaRegCheckCircle } from "react-icons/fa";

const Skills = () => {
  return (
    <div id='Skills'>
      <section className={style.section}>
  <div className={style.skills}>
    <div className={style.skills_div}>
      <h2 className={style.h2}>
        Skills
      </h2>
      <h1 className={style.h1}>
        My Skills
      </h1>
    </div>
    <div className={style.div1}>
        {/* Skils Section */}
      {/* <div className="p-4 md:w-1/3">
        <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
              </svg>
            </div>
            <h2 className="text-gray-900 text-lg title-font font-medium">
              Shooting Stars
            </h2>
          </div>
          <div className="flex-grow">
            <p className="leading-relaxed text-base">
              Blue bottle crucifix vinyl post-ironic four dollar toast vegan
              taxidermy. Gastropub indxgo juice poutine.
            </p>
            <a className="mt-3 text-blue-500 inline-flex items-center">
              Learn More
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div> */}
      <div className={style.skills1}>
        <div className={style.skills_div1}>
          <div className={style.skills_div2}>
            <div className={style.skills_div3}>
            <FaRegCheckCircle className={style.icons} />
            </div>
            <h2 className={style.skills_h2}>
              HTML
            </h2>
          </div>
          <div className={style.skills_div4}>
            <div className={style.skills_div5}>
                <div className={style.skills_diva}></div>
            </div>
             <p className={style.skills_div7}>100%</p>
          </div>
        </div>
      </div>
      <div className={style.skills1}>
        <div className={style.skills_div1}>
          <div className={style.skills_div2}>
            <div className={style.skills_div3}>
            <FaRegCheckCircle className={style.icons} />
            </div>
            <h2 className={style.skills_h2}>
              Css
            </h2>
          </div>
          <div className={style.skills_div4}>
            <div className={style.skills_div5}>
                <div className={style.skills_divb}></div>
            </div>
             <p className={style.skills_div7}>95%</p>
          </div>
        </div>
      </div>
      <div className={style.skills1}>
        <div className={style.skills_div1}>
          <div className={style.skills_div2}>
            <div className={style.skills_div3}>
            <FaRegCheckCircle className={style.icons}/>
            </div>
            <h2 className={style.skills_h2}>
              TypeScript
            </h2>
          </div>
          <div className={style.skills_div4}>
            <div className={style.skills_div5}>
                <div className={style.skills_divc}></div>
            </div>
             <p className={style.skills_div7}>90%</p>
          </div>
        </div>
      </div>
      <div className={style.skills1}>
        <div className={style.skills_div1}>
          <div className={style.skills_div2}>
            <div className={style.skills_div3}>
            <FaRegCheckCircle className={style.icons}/>
            </div>
            <h2 className={style.skills_h2}>
              Next Js
            </h2>
          </div>
          <div className={style.skills_div4}>
            <div className={style.skills_div5}>
                <div className={style.skills_divd}></div>
            </div>
             <p className={style.skills_div7}>80%</p>
          </div>
        </div>
      </div>
      <div className={style.skills1}>
        <div className={style.skills_div1}>
          <div className={style.skills_div2}>
            <div className={style.skills_div3}>
            <FaRegCheckCircle className={style.icons}/>
            </div>
            <h2 className={style.skills_h2}>
              Tailwind Css
            </h2>
          </div>
          <div className={style.skills_div4}>
            <div className={style.skills_div5}>
                <div className={style.skills_dive}></div>
            </div>
             <p className={style.skills_div7}>60%</p>
          </div>
        </div>
      </div>
      <div className={style.skills1}>
        <div className={style.skills_div1}>
          <div className={style.skills_div2}>
            <div className={style.skills_div3}>
            <FaRegCheckCircle className={style.icons}/>
            </div>
            <h2 className={style.skills_h2}>
              Figma
            </h2>
          </div>
          <div className={style.skills_div4}>
            <div className={style.skills_div5}>
                <div className={style.skills_divf}></div>
            </div>
             <p className={style.skills_div7}>50%</p>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

    </div>
  )
}

export default Skills
