import React from 'react'
import '../styles/page4.css'
import WorkCard from './WorkCard';
import '../styles/workCard.css'
import { Link } from 'react-router-dom';

export default function Page4() {

  const [works, setWorks] = React.useState([
    {
      img: 'https://framerusercontent.com/images/ymlYzKfU1alTz2wHxpd9okEg4Q.webp',
      heading: 'AirAsia - from an airline to a super-app',
      subheading: 'How the Malaysian airline is building a one-stop shop for travel',
    },
    {
      img: 'https://framerusercontent.com/images/CCooOXfVHjNzkC8K72IxpLsF7c.webp',
      heading: 'The future of design systems | #58',
      subheading: 'My thesis for why more writers will choose Substack over alternatives',
    },
    {
      img: 'https://framerusercontent.com/images/LjTejUkfCe6PDwLpk3ezvcgByk.webp',
      heading: 'Everyone in this country drives a Chevy| #57',
      subheading: 'How Chevy took 94% market share in Uzbekistan',
    }
  ]);

  return (
    <div className='page4'>
      <h3 className='page_h3'>My best work</h3>
      <div className='page4_works'>
        {
          works.length > 0 && works.map((work, index) => (
            <WorkCard work={work} />
          ))
        }
      </div>

      <Link className='button2'>Read all essays</Link>
    </div>
  )
}
