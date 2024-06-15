import React from 'react'
import '../styles/testimonials.css'
import { white_star, yellow_star } from '../assets'

const initState = [{
    name: 'Girish Bhat',
    title: 'Full Stack Developer',
    rating: 4,
    image: 'https://avatars.githubusercontent.com/u/91236511?v=4',
    review: 'An independent and self-motivated person, with proven and experienced Backend Development Skills. Looking to secure a challenging position in a reputable company to explore a problem solving environment and expand my knowledge.',
    date: '12th July 2021'
},
{
    name: 'Ritu Gill',
    title: 'Open Source Intelligence Analyst',
    rating: 3,
    review: 'An invaluable resource for anyone in the OSINT field. The newsletter offers OSINT content and keeps me updated on the latest tools and techniques in the OSINT community. It keeps me from missing things in the week. Highly recommend!',
    image: 'https://senjaio.b-cdn.net/public/avatar/e78e7f56-4c8d-44d4-a4cb-fb2883bcfa40_1681504417742.jpg?width=63&height=63&format=webp',
    date: '12th July 2021'
},
{
    name: 'Jason Howarth',
    title: 'Marketing Specialist',
    rating: 4,
    review: 'Really great stuff. A must-read for staying current in the OSINT field.',
    image: 'https://ik.imagekit.io/senja/tr:f-jpeg/Avatars/avatar_aOgsMJ-eZ.png?ik-sdk-version=javascript-1.4.3&updatedAt=1657796891741',
    date: '2nd August 2024'
},
{
    name: 'Girish Bhat',
    title: 'Full Stack Developer',
    rating: 4,
    review: 'An invaluable resource for anyone in the OSINT field. The newsletter offers OSINT content and keeps me updated on the latest tools and techniques in the OSINT community. It keeps me from missing things in the week. Highly recommend!',
    image: 'https://senjaio.b-cdn.net/public/avatar/fa7488e1-74fc-4ba4-983c-95c1df67c727_UNWAVERING%20%281%29.png?width=63&height=63&format=webp',
    date: '12th May 2021'
},
{
    name: 'David Svinka',
    title: 'LE Investigator',
    rating: 4,
    review: `In any case, I like the frequency of posts. There doesn't seem to be a lot of downtime, with new information available daily, interspersed with other sources. Everything is clear, graphic and easy to understand. I have recommended to a friend several times and would not hesitate to recommend to other people. Keep up the good work!`,
    image: 'https://ik.imagekit.io/senja/tr:f-jpeg/Avatars/avatar_aOgsMJ-eZ.png?ik-sdk-version=javascript-1.4.3&updatedAt=1657796891741',
    date: '13th April 2021'
},

];


export default function TestiNomials() {

    const [testimonials] = React.useState(initState)

    return (
        <div className='testinomials'>
            {
                testimonials.map((testimonial, index) => (
                    <div className='testimonial' key={index}>
                        <div className='user_info'>
                            <img src={testimonial.image} alt='user_image' />
                            <div>
                                <h3>{testimonial.name}</h3>
                                <p>{testimonial.title}</p>
                            </div>
                        </div>
                        <div className='review'>
                            {new Array(5).fill(0).map((_, i) => (
                                <img src={i < testimonial.rating ? white_star : yellow_star} alt='star' key={i} />
                            ))}
                        </div>
                        <div className='review'>
                            <p>{testimonial.review}</p>
                        </div>
                        <div className='date'>
                            <p>{testimonial.date}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}
