import React from 'react';

const VideoItem = props => {
    return (
        <div
            onClick={props.onClick}
            className="iframe"
            key={props.key}
        >
            <iframe src={props.src} allowFullScreen />
            <div className="side-content">
                <h3>{props.title}</h3>
            </div>
        </div>
    )
}
export default VideoItem;