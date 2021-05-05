import axios from 'axios';
const api_key = 'AIzaSyAiP87H9sTZb_TvwCVRReZ0geYKCx_Zk9U';


export default axios.create({
    //baseURL: 'https://www.youtube.com/',
    baseURL: 'https://googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 4,
        key: api_key
    }

})