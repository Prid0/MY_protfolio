import React from 'react';
import '../component/styles/ProjectCard.css';
import { motion } from 'framer-motion';

function ProjectCard({ img, title, discription, tool1, tool2, tool3, i, link }) {

    return (
        <motion.div
            className="project_card"
            initial={{ translateY: 20, opacity: 0 }}
            whileInView={{ translateY: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: i * 0.3 }}
            viewport={{ once: true }}
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
