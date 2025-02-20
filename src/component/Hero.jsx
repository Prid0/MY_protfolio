import React from 'react';
import '../component/styles/Hero.css';
import { motion } from 'framer-motion';

function Hero() {
    return (
        <div className="hero_container">
            <div className="left_side">
                <div className="bar_container">
                    <div className="circle"></div>
                    <motion.div
                        className="bar"
                        initial={{ opacity: 0, height: 0 }}
                        whileInView={{ opacity: 1, height: "100%" }}
                        transition={{ duration: 0.9, delay: 0.3 }}
                        viewport={{ once: true }}
                    ></motion.div>
                </div>

                <motion.div
                    className="hero_info"
                    initial={{ opacity: 0, y: -100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    viewport={{ once: true }}
                >
                    <h1 className="heading">
                        Hi, I'm <span className="highlight">Priyan</span>
                    </h1>
                    <motion.p
                        className="details"
                        initial={{ opacity: 0, y: -50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.7 }}
                        viewport={{once:true}}
                    >
                        Let's Elevate Your Vision with
                        <br />
                        My Code Craftsmanship.
                        <br />
                        Ready to start Your Next Project?
                        <br />
                        Let's Build Something Extraordinary Together!
                    </motion.p>
                </motion.div>
            </div>

            <div className="right_side">
                <div
                    className="hero_img">
                    <motion.img src="./hero_img2.png" alt="Hero"
                        initial={{ opacity: 0, x: 100, scale: 0.9 }}
                        whileInView={{ opacity: 1, x: 0, scale: 1 }}
                        transition={{ duration: 0.9, delay: 0.7, ease: "easeOut" }}
                        viewport={{ once: true }} />
                </div>
            </div>
        </div>
    );
}

export default Hero;
