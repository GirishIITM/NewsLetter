import React from 'react'
import {Link} from "react-router-dom";

export default function WorkCard({work}) {
  return (
    <a href={work.link} className='work_card' target="_blank">
        <img src={work.img} alt="" />
        <h3 className='work_heading'>{work.heading}</h3>
        <p className='work_subheading'>{work.subheading}</p>
    </a>
  )
}
