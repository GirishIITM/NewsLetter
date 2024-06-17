import React from 'react'
import '../styles/page5.css'

export default function Page5() {
    return (
        <div className='page5'>
            <div className='page5_head'>
                <h3 className='page5_h3'>Get a free book on</h3>
                <button className='button2'>See all products</button>
            </div>
            <div className='template_box'>
                <img src="https://framerusercontent.com/images/RcY9MxYfdkom935JmhacufyeruE.jpg?scale-down-to=2048" alt="" />
                <div className='template_box_right'>
                    <div className='template_box_child1'>
                        <div className='tags'>
                            <span className='tag'>ebook</span>
                            <span className='tag'>free</span>
                        </div>
                        <button className='button3'>$0</button>
                    </div>
                    <h3>Phone Number OSINT Guide</h3>
                    <p>Learn the art of investigating a phone number with this free eBook.</p>
                    <div className='template_btns'>
                        <button className='button_1'>Get it now</button>
                        <button className='button2'>Learn more</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
