import React from 'react'
import '../styles/page3.css'
import {profile_png} from '../assets'

export default function Page3() {
    return (
        <div className='page3'>
            <h3 className='page_h3'>What's it about?</h3>
            <div className='about_page'>
                <div className='about_flex'>
                    <div className='about_left'>
                        <img src={profile_png} alt=""/>
                        <h3>Dheeraj Yadav</h3>
                        <p>(Founder, OSINT Ambition)</p>
                    </div>
                    <div className='about_right'>
                        <h2>Latest news about everything from OSINT industry in your inbox</h2>
                        <p>OSINT updates is one of the fast-growing OSINT newsletters which provides a variety of
                            content in an easy-to-read format. We help people in staying updates with the community
                            while not wasting time in scrolling social media for industry updates. As of today, all of
                            our posts are free to read, so as a thanks, don’t forget to share our newsletter with other
                            OSINT lovers in your contact. </p>
                        <p className='about_margin'>As of today, OSINT Updates has been divided into following two
                            sections -</p>
                        <ul>
                            <li><strong> The Wednesday Updates </strong>- a knowledge packed community curated
                                newsletter containing all updates from the whole OSINT community including all new
                                blogs, videos, new features in tools, jobs and OSINT related news, podcast, OSINT tips,
                                and many more in a single issue.
                                <p className='about_itl' style={{marginTop: '2px'}}>Every new Issue gets published on Wednesday.</p>
                            </li>
                            <li><strong> Top 10 Series</strong> -a curated list of top 10 resources like top 10 tools,
                                top 10 books, top 10 OSINT course and other useful resources.<p style={{marginTop: '2px'}}
                                    className='about_itl'>Every new issue will be published on Saturday from now
                                    onwards.</p>
                            </li>
                        </ul>

                        <p>One upcoming section is Input Types, it will only be available for paid subscribers as it
                            will take a lot of time in research. It will be launched once we feel we have at least 49
                            subscribers who are ready to support in this journey by purchasing a subscription.</p>
                    </div>
                </div>
                <div className='about_end'>
                    <button className='button_1'>Subscribe now it's free</button>
                    <p>Join 650+ smart & curious readers</p>
                </div>
            </div>
        </div>
    )
}
