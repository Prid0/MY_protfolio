import React from 'react'
import '../component/styles/Card.css'
import { motion } from 'framer-motion'
function Card({ Tname, img, i }) {
  return (
    <motion.div className="card"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.2, delay: i * 0.2 }}
      viewport={{ once: true }}
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
