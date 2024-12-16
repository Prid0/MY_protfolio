import React from 'react'
import '../component/styles/Project.css'
import TextContainer from './TextContainer'
import ProjectCard from './ProjectCard'
import { ProjectCardData } from '../Data/ProjectCardData'
function Projects() {
    return (
        <div className='projrct_container'>
            <div className="top_section">
                <TextContainer intro="MY WORK" title="projects." para="Following projects showcases my skills and experience through real-world examples of my work. Each project is briefly described with links to code repositories and live demos in it. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively." />
            </div>

            <div className="card_containet">
                {
                    ProjectCardData.map((data, index) => (
                        <ProjectCard key={index} i={index}
                            img={data.img} title={data.title} discription={data.discription}
                            link={data.link}
                            tool1={data.tool1}
                            tool2={data.tool2}
                            tool3={data.tool3}
                        />
                    ))
                }


            </div>
        </div>
    )
}

export default Projects
