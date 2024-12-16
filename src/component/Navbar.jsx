import React, { useState, useEffect } from 'react'
import "../component/styles/Navbar.css"
import {motion} from 'framer-motion'

function Navbar() {
    let [openmenu, setopenmenu] = useState(true);
    let menucontrol = () => {
        setopenmenu(!openmenu);
    }
    const closeMenu = () => {
        setopenmenu(!openmenu);
    };
    
    useEffect(() => {
        const scrollHandler = () => {
          if (window.scrollY > 60) {
            setopenmenu(true);
          }
        };
      
        window.addEventListener('scroll', scrollHandler);
    
      }, [openmenu]);

    return (
        <motion.div className='nav_container'
        initial={{opacity:0,y:-20}}
        whileInView={{opacity:1,y:0}}
        transition={{duration:0.6 ,delay:1.4}}
        viewport={{once:true}}
        >
            <div className="left">
                <div className="brand_name">
                    <div className="logo"></div>
                    <p>
                        Priyan vishwakarma <span>| developer</span>
                    </p>
                </div>

                <div
                    className={`hamburger ${!openmenu ? 'cross' : ''}`}
                    onClick={menucontrol}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>

            <ul className={`link_container ${openmenu ? 'open' : ''}`}>
                <li onClick={closeMenu}><a href='#about'>About</a></li>
                <li onClick={closeMenu}><a href='#work'>Work</a></li>
                <li onClick={closeMenu}><a href='#project'>Project</a></li>
                <li onClick={closeMenu}><a href='#contect'>Contact</a></li>
            </ul>
        </motion.div>
    )
}

export default Navbar
