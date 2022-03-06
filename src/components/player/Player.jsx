import './Player.css'
import { FaPlay, FaPause } from 'react-icons/fa'
import { useState } from 'react'
import ReactPlayer from "react-player"

const Player = ({muted, url}) => {
  const [play, setPlay] = useState(false)
  const [volume, setVolume] = useState(0.05)
  return (
    <div className="player">
      {!play ? 
      <FaPlay
        className="play-button"
        onClick={() => setPlay(true)} /> : 
      <FaPause 
        className="play-button"
        onClick={() => setPlay(false)} />}
      <div className="audio-player">
        <ReactPlayer
            className="vid"
            width="0%"
            height="0%"
            loop="true"
            playing={play}
            volume={muted ? "0" : `${volume}`}
            url={url}
        />
    </div>
    <input
          className="player-volume"
          type="range"
          min={0}
          max={1}
          value={volume}
          step={0.01}
          onChange={(event) => {
            setVolume(event.target.valueAsNumber);
          }}
        />
    </div>
  )
}

export default Player