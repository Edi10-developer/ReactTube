import React from 'react';

const VideoItem = ({ video, handleVideoSelect }) => {
    const url = `https://www.youtube.com/embed/${video.id.videoId}`;
    return (
        <li key={video.etag}>
            <div handleVideoSelect={handleVideoSelect}
                className="iframe"
                >
                <iframe src={url} allowFullScreen />
                <div className="side-content">
                    <h3>{video.snippet.title}</h3>
                </div>
            </div>
        </li>
    )
}
export default VideoItem;