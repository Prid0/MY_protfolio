import React from 'react'
import '../component/styles/Contect.css'
import { motion } from 'framer-motion'
function Contect() {
    return (
        <div className="contect_container"
        >
            <video src="/spaceVideo.mp4" autoPlay loop muted className='bg_video'>
            </video>
            <motion.div className="contect_left_side"
                initial={{ opacity: 0, y: -40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
            >
                <p>GET IN TOUCH</p>
                <h1>Contact.</h1>

            </motion.div>


            <motion.div className="form_container"
                initial={{ opacity: 0, x: 300 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.9 }}
                viewport={{ once: true }}
            >
                <form>

                    <label htmlFor="name">Your Name</label>
                    <input type="text" id="name" name="name" placeholder='let me know your good name' required />

                    <label htmlFor="email">Your Email</label>
                    <input type="email" id="email" name="email" placeholder={`what's your email address?`} required />

                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="message" placeholder='what do you want to talk about?' rows="4" required></textarea>

                    <button type="submit">Submit</button>
                </form>
            </motion.div>

        </div>
    )
}

export default Contect