import React from 'react'
import '../component/styles/TestimonialCard.css'
import { easeIn, easeOut, motion } from 'framer-motion'
function TestimonialCard({ openion, name, palce, img,i }) {
  return (
    <motion.div className="tetimonial_card"
      initial={{ opacity: 0,translateY:20}}
      whileInView={{ opacity: 1,translateY:0}}
      transition={{ duration: 0.5, delay: i * 0.5,easings:easeOut}}
      viewport={{once:true}}
    >
      <div className="card_top">
        <h2>"</h2>
        <p>{openion}</p>
      </div>
      <div className="card_bottom">
        <div className="card_bottom_left">
          <h4> <span>@ </span>{name}</h4>
          <p>{palce}</p>
        </div>
        <div className="card_bottom_right">
          <img src={img} alt="photo" />
        </div>
      </div>
    </motion.div>
  )
}

export default TestimonialCard