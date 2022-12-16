import React from "react";
import "../player/Player.css"
import enigmaVideo from "../../video/locale.mp4";

const Player = () => {
  return (
    <div className="">
      <video class="video" controls>
        <source src={enigmaVideo} type="video/mp4"></source>
      </video>
    </div>
  );
};

export default Player;
