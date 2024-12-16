import React from 'react'
import '../component/styles/About.css'
import AboutCard from './AboutCard'
import TextContainer from './TextContainer'
import GlowCursor from './GlowCursor'
import { AbourCardData } from '../Data/AbourCardData'
function About() {
  return (
    <div className='about_container'>
       <GlowCursor />
      <div className='top_section'>
        <TextContainer intro="INTRODUCTION" title="overview." para="I'm a dynamic software engineer and a perpetual learner fueled by curiosity, constantly seeking innovation and exploring new opportunities in technology. I am proficient in a range of programming languages including Java, JavaScript, TypeScript. My toolkit includes an array of frameworks and libraries such as Spring Boot, Express, NextJS, React, MaterialUI, Redux, and SwiftUI. I ensure robust code quality. Seamlessly navigating cloud services, I harness the power of AWS and GCP to breathe life into your concepts. From inception to implementation, let's collaborate to transform your visions into remarkable, user-centric digital realities." img="/circle2.png" />
      </div>

      <div className="Acard_containet">
        {AbourCardData.map((data, index) => (
          <AboutCard key={index} i={index}
            Tname={data.Tname} Bname={data.Bname} img={data.img} />
        ))
        }
      </div>

    </div>

  )
}

export default About
