import axios from 'axios';

const Youtube = props => {
    axios.create({

        baseURL: 'https://www.youtube.com/',

        params: {
            parte: props.parte,
            maxResults: props.maxResults,
            key: props.key
        }

    })
}

export default Youtube;