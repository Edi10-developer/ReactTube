import { VideoListDiv } from './styles';
import { VideoItem } from '../index';

const VideoList = ({ videos, handleVideoSelect }) => {
    return (
        <VideoListDiv>
            <ul>
            {
                videos.map((video) => {
                    return (
                        <VideoItem
                            video={video}
                            handleVideoSelect={handleVideoSelect}  
                            title={video.title}
                            key={video.etag}
                        />
                    )
                })
            }
            </ul>


        </VideoListDiv>
    )
}

export default VideoList;
