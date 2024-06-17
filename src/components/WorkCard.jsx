import React from 'react'

export default function WorkCard({work}) {
  return (
    <div className='work_card'>
        <img src={work.img} alt="" />
        <h3 className='work_heading'>{work.heading}</h3>
        <p className='work_subheading'>{work.subheading}</p>
    </div>
  )
}
