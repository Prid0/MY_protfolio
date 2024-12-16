import React from 'react'
import Card from './Card'
import '../component/styles/Work.css'
import { ToolsData } from '../Data/ToolsData'
function Work() {
  return (
    <div className='work_container'>
      {
        ToolsData.map((data, index) => (
          <Card key={index} Tname={data.Tname} img={data.img} i={index} />
        ))
      }
    </div>
  )
}

export default Work
