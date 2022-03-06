import { useEffect, useState } from 'react'
import './Video.css'
import video1 from './video1.mp4'
import video2 from './video2.mp4'


const Video = () => {
    return (
        <div>
            <video autoPlay muted loop className="background-video">
                <source src={Math.random() < 0.5 ? video1 : video2} type="video/mp4"/>
            </video>
    </div> 
    )
}

export default Video