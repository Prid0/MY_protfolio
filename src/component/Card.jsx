import React from 'react'
import '../component/styles/Card.css'
import { motion } from 'framer-motion'
function Card({ Tname, img, i }) {
  return (
    <motion.div className="card"
      initial={{ opacity: 0, scale: 0.6 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.5,
        ease: [0.6, 0, 0.3, 0.8],
        delay: i * 0.2
      }}
      viewport={{ amount: 0.1, once: true }}
    >
      <div className="inner_card">
        <div className="card_img">
          <img src={img} alt="logo" />
        </div>
        <div className="card_text">
          <h2>{Tname}</h2>
        </div>
      </div>
    </motion.div>
  )
}

export default Card
