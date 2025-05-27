import React from 'react'
import Card from './Card'
import '../component/styles/Work.css'
import { ToolsData } from '../Data/ToolsData'
import TextContainer from './TextContainer'
function Work() {
  return (
    <div className='work_container'>
      
      <div className="work_container_top">
        <TextContainer
          intro="SKILLS & TOOLS"
          title="Technologies I Use."
          para="Below is a list of technologies and tools I’ve worked with throughout my development journey. These include frontend, backend, database, and programming languages that help me build responsive, dynamic, and efficient applications."
        />
      </div>

      {
        ToolsData.map((data, index) => (
          <Card key={index} Tname={data.Tname} img={data.img} i={index} />
        ))
      }
    </div>
  )
}

export default Work
