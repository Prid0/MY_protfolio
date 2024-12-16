import React from 'react'
import '../component/styles/TextContainer.css'
import { motion } from 'framer-motion'
function TextContainer({ intro, title, para, img }) {
  return (
    <>
      <div className="left_section"
      >
        <motion.h1 className='intro'
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >{intro}</motion.h1>
        <motion.h1 className='title'
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          viewport={{ once: true }}
        >{title}</motion.h1>
        <motion.div className="overview"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          viewport={{ once: true }}
        >
          <p>{para}</p>
        </motion.div>
      </div>
      <div className="right_section">
        <img src={img} alt="" />
      </div>
    </>
  )
}

export default TextContainer
