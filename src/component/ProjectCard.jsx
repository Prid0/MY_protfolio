import React from "react";
import { motion } from "framer-motion";
import "../component/styles/ProjectCard.css";

function ProjectCard({ img, title, discription, tool1, tool2, tool3, link, i }) {
    const isMobile = window.innerWidth < 768; // Check if device is mobile

    return (
        <motion.div
            className="project_card"
            initial={{ 
                opacity: 0, 
                filter: "blur(10px)", 
            }} 
            whileInView={{ 
                opacity: 1, 
                filter: "blur(0px)",  
            }} 
            transition={{
                duration: 0.5,
                delay: i ? i * 0.1 : 0,
            }}
            viewport={{ amount: 0.1, once: true }}
        >
            <div className="Pinner_card">
                <div className="Pcard_img" style={{ backgroundImage: `url(${img})` }}>
                    <div className="demo_btn">
                        <div className="round"></div>
                        <a href={link} target="_blank" rel="noopener noreferrer">Demo</a>
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
