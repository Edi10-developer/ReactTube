import React from "react";
import { VideoDiv } from "./styles";
import { Iframe } from '../index'; 

const VideoDetails = (props) => {
  return (
    <VideoDiv> 
        <Iframe src={props.src} title={props.title} description={props.description}/>
    </VideoDiv>
  );
};

export default VideoDetails;
