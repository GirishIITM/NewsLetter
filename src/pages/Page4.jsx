import React from 'react'
import '../styles/page4.css'
import WorkCard from '../components/WorkCard';
import '../styles/workCard.css'
import { Link } from 'react-router-dom';
import {osint_logo, osint_series, osint_updates} from "../assets/index.js";

export default function Page4() {

  const [works, setWorks] = React.useState([
    {
      img: osint_series,
      heading: 'Wednesday Updates #1',
      subheading: 'Highlights: 7 Interesting blogs, 7 awesome videos, 9 new tools, 5 job openings, one free eBook and many more.\n',
      link: 'https://osintambition.substack.com/p/wednesday-updates-1'
    },
    {
      img: osint_updates,
      heading: 'OSINT design systems ',
      subheading: 'This post consists of best OSINT courses for beginners which are absolutely free along with a brief description and review of each.\n',
      link: 'https://osintambition.substack.com/p/free-osint-courses-for-beginners'
    },
    {
      img: osint_logo,
      heading: 'OSINT Top 10 Series',
      subheading: '"The Top10 Series" where we will be sharing all the top resources for learning OSINT which are easily accessible on Internet.\n',
      link: 'https://osintambition.substack.com/p/top-10-osint-tools-to-learn-the-top10'
    }
  ]);

  return (
    <div className='page4'>
      <h3 className='page_h3'>My best work</h3>
      <div className='page4_works'>
        {
          works.length > 0 && works.map((work, index) => (
            <WorkCard key={index} work={work} />
          ))
        }
      </div>

      <Link className='button2' to=''>Read all essays</Link>
    </div>
  )
}
