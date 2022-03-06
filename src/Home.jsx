import React, { useState } from 'react';
import Header from './components/header/Header';
import Video from './components/video/Video'
import Player from './components/player/Player';
import { FaPlay } from 'react-icons/fa'
import { motion } from 'framer-motion';
import './Home.css'

const Home = () => {

    const [url, setUrl] = useState("https://www.youtube.com/watch?v=WDXPJWIgX-o")

    const Sidebar = () => {
        return (
            <motion.div 
                className="sidebar"
                initial={{opacity: 0}}
                animate={{opacity: 1}}
            >
                <div 
                    className="station"
                    onClick={() => setUrl("https://www.youtube.com/watch?v=WDXPJWIgX-o")}
                ><FaPlay className="station-play" /> anime radio</div>
                <div 
                className="station"
                onClick={() => setUrl("https://www.youtube.com/watch?v=5qap5aO4i9A")}
                ><FaPlay className="station-play" /> lofi girl radio</div>
                <div 
                    className="station"
                    onClick={() => setUrl("https://www.youtube.com/watch?v=kgx4WGK0oNU")}
                ><FaPlay className="station-play" /> jazz lofi radio</div>
                <div 
                className="station"
                onClick={() => setUrl("https://www.youtube.com/watch?v=t2pU3iTkv3w")}
                ><FaPlay className="station-play" /> chill drive radio</div>
            </motion.div>
        )
    }

    return (
        <>
            <Header />
            <Sidebar />
            <Video />
            <Player muted={false} url={url} />
        </>
  )
}

export default Home