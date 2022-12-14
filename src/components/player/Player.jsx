import React from 'react'
import enigmaVideo from "../../video/locale.mp4"

const Player = () => {
  return (
    <div>
      
        <video className='video' src={enigmaVideo}></video>
        </div>
  )
}

export default Player