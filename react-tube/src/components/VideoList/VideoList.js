import { VideoListDiv } from './styles';
import { Iframe } from '../index'; 

const VideoList = props => {
    return (
        <VideoListDiv>
            <Iframe src={props.src} title={props.title} description={props.description} onClcik={props.onClcik} />
            <Iframe src={props.src} title={props.title} description={props.description} onClcik={props.onClcik} />
            <Iframe src={props.src} title={props.title} description={props.description} onClcik={props.onClcik} />
            <Iframe src={props.src} title={props.title} description={props.description} onClcik={props.onClcik} />
        </VideoListDiv>
    )
}

export default VideoList;