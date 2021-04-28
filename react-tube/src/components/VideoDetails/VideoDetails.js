import React from "react";
import { VideoDiv } from "./styles";
import { Iframe } from '../index'; 

const VideoDetails = (props) => {
  return (
    <VideoDiv> 
        <Iframe />
    </VideoDiv>
  );
};

export default VideoDetails;
