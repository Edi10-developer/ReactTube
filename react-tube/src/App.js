import React, { useState } from 'react';
import './App.css';
import { SearchBar, VideoDetails, VideoList } from './components/index';
import axios from 'axios';
//import youtube from './components/API/youtube';

function App() {
  const [snippet, setSnippet] = useState({ videos: [], selectedVideo: null })
  const [termsOfSearch, setTermsOfSearch] = useState('');
  const [data, setData] = useState({ url: '', title: '', description: '' })

  const handleSubmit = async (termsOfSearch) => {
    const api_key = 'AIzaSyAiP87H9sTZb_TvwCVRReZ0geYKCx_Zk9U';
    console.log(termsOfSearch)

    await axios(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${termsOfSearch}&key=${api_key}`)
      .then(response => {
        console.log(response.data)
        setSnippet({ videos: response.data.items, selectedVideo: response.data.items[0] })
        setData({
          url: `https://www.youtube.com/embed/${response.data.items[0].id.videoId}`,
          title: response.data.items[0].snippet.title,
          description: response.data.items[0].snippet.description
        })
        //setSnippet({ selectedVideo: response.data.items[0] })
      })  
  }

  const handleChange = event => {
    setTermsOfSearch(event.target.value);
  };

  
  return (
    <div className="App">

      <SearchBar
        value={termsOfSearch}
        onChange={handleChange}
        onClick={handleSubmit}
      />

      <VideoDetails
       src={data.url}
       title={data.title}
      />

      <VideoList
        handleVideoSelect={selectedVideo => setSnippet({ selectedVideo: selectedVideo })}
        videos={snippet.videos}
      />

    </div>
  );
}

export default App;
