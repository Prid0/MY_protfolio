import React from 'react';
import '../component/styles/ProjectCard.css';
import { motion } from 'framer-motion';

function ProjectCard({ img, title, discription, tool1, tool2, tool3, i, link }) {

    return (
        <motion.div
            className="project_card"
            initial={{ opacity: 0, scale: 0.5, filter: "blur(5px)" }}
            whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{
                duration: 0.7,
                ease: [0.8, 0, 0.1, 1],
                delay: i * 0.4
            }}
            viewport={{ amount: 0.3, once: true }}
        >
            <div className="Pinner_card">
                <div className="Pcard_img" style={{ backgroundImage: `url(${img})` }}>
                    <div className="demo_btn">
                        <div className="round"></div>
                        <a
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Demo
                        </a>

                    </div>
                </div>
                <div className="content">
                    <h2>{title}</h2>
                    <p>{discription}</p>
                    <p>
                        <span className='t1'>#{tool1}</span>
                        <span className='t2'>#{tool2}</span>
                        {tool3 && <span className='t3'>#{tool3}</span>}
                    </p>
                </div>
            </div>
        </motion.div>
    );
}

export default ProjectCard;
