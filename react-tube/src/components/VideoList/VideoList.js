import { VideoListDiv } from './styles';
import { VideoItem } from '../index';

const VideoList = props => {
    return (
        <VideoListDiv>
            {
                props.videos.map((video, key) => {
                    return (
                        <VideoItem
                            video={video}
                            handleVideoSelect={props.handleVideoSelect}  
                            title={video.title}
                            src={props.src}
                            key={key}
                        />
                    )
                })
            }


        </VideoListDiv>
    )
}

export default VideoList;
