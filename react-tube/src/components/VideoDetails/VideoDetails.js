import React from "react";
import { VideoDiv } from "./styles"; 

const VideoDetails = props => {
  if (!props) {
    return <div>Loading...</div>;
  }
  
  return (
    <VideoDiv> 
        <iframe src={props.src} />
        <div>{props.title}</div>
        <div>{props.description}</div>
    </VideoDiv>
  );
};

export default VideoDetails;






/*import React from "react";
import { VideoDiv } from "./styles"; 

const VideoDetails = ({video}) => {
  if (!video) {
    return <div>Loading...</div>;
  }
  const url = `https://www.youtube.com/embed/${video.id.videoId}`;
  return (
    <VideoDiv> 
        <iframe src={url} />
        <div>{video.snippet.title}</div>
        <div>{video.snippet.description}</div>
    </VideoDiv>
  );
};

export default VideoDetails;
*/