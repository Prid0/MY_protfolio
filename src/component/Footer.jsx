import React from 'react'
import '../component/styles/Footer.css'
import { FaFacebook, FaLinkedin, FaGithub } from 'react-icons/fa';
import { AiFillInstagram } from "react-icons/ai";
function Footer() {
    return (
        <div className='footer_container'>
            <div className="media_link">
                <a href="https://www.facebook.com/priyan.vishwakarma.3?mibextid=kFxxJD"><FaFacebook /></a>
                <a href="https://www.linkedin.com/in/priyan-vishwakarma?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><FaLinkedin /></a>
                <a href="https://www.instagram.com/vishwakarma_priyan/profilecard/?igsh=Y3FlcTR3cGthODd0">   <AiFillInstagram /></a>
                <a href="https://github.com/Prid0"><FaGithub /> </a>
            </div>
            <p>© Priyan Vishwakarma. All Rights Reserved.</p>
        </div>
    )
}

export default Footer