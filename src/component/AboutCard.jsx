import React from 'react'
import '../component/styles/AboutCard.css'
import {motion} from 'framer-motion'
function AboutCard({img,Tname,Bname ,i}) {
  return (
    <motion.div className="Acard"
    initial={{ opacity: 0}}
      whileInView={{ opacity: 1}}
      transition={{ duration: 0.3, delay: i * 0.4}}
      viewport={{once:true}}
    >
    <div className="Ainner_card">
      <div className="Acard_img">
        <img src={img} alt="logo" />
      </div>
      <div className="Acard_text">
        <h2>{Tname}</h2>
        <h2>{Bname}</h2>
      </div>
    </div>
  </motion.div>
  )
}

export default AboutCard
