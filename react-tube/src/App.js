import React, { useState } from 'react';
import './App.css';
import { SearchBar, VideoDetails, VideoList } from './components/index';
import axios from 'axios';

function App() {
  const [snippet1, setSnippet1] = useState({ videos: [], selectedVideo: null })
  const [url, setUrl] = useState({ url: '', title: '', description: '' })
  const [value, setValue] = useState('');

  const handleSubmit = async () => {
    const api_key = 'AIzaSyAiP87H9sTZb_TvwCVRReZ0geYKCx_Zk9U';
    const snippet_q = value;
    
    await axios(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${value}&key=${api_key}`)
      .then(datas => {
        setUrl({
          url: `https://www.youtube.com/embed/${datas.data.items[0].id.videoId}`,
          title: datas.data.items[0].snippet.title,
          description: datas.data.items[0].snippet.description
        })
      })
  }

  const handleVideoSelect = () => {
   setValue(value)
   handleSubmit();
  }

  return (
    <div className="App">
      <SearchBar
        value={value}
        onClick={handleVideoSelect}
      />

      <VideoDetails
        src={url.url}
        title={url.title}
        description={url.description}
      />

      <VideoList />
      <button onClick={handleVideoSelect}>Video Call</button>
    </div>
  );
}

export default App;
