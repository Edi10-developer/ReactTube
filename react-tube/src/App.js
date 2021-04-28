import React, { useState } from 'react';
import './App.css';
import { SearchBar, VideoDetails, VideoList } from './components/index';
import axios from 'axios';

function App() {
  //const [snippet1, setSnippet1] = useState({ videos: [], selectedVideo: null })
  const [termsOfSearch, setTermsOfSearch] = useState('');
  const [url, setUrl] = useState({ url: '', title: '', description: '' })

  const handleSubmit = async () => {
    const api_key = 'AIzaSyAiP87H9sTZb_TvwCVRReZ0geYKCx_Zk9U';

    await axios(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${termsOfSearch}&key=${api_key}`)
      .then(datas => {
        setUrl({
          url: `https://www.youtube.com/embed/${datas.data.items[0].id.videoId}`,
          title: datas.data.items[0].snippet.title,
          description: datas.data.items[0].snippet.description
        })
      })
  }

  const handleVideoSelect = () => {
    //setValue(value)
    //handleSubmit();
  }

  const handleChange = event => {
    setTermsOfSearch(event.target.value);
  };

  return (
    <div className="App">
      <SearchBar
        value={termsOfSearch}
        onChange={handleChange}
      />

      <VideoDetails
        src={url.url}
        title={url.title}
        description={url.description}
      />

      <VideoList onClick={handleVideoSelect} />

      <button onClick={handleSubmit}>Video Call</button>
    </div>
  );
}

export default App;
