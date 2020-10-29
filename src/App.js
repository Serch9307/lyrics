import React, {Fragment, useState, useEffect} from 'react';
import Form from './components/Form';
import Song from './components/Song';
import Artist from './components/Artist';
import axios from 'axios';
function App() {
  const [searchLyrics, setSearchLyrics] = useState({});
  const [lyrics, setLyrics] = useState('');
  const [artist, setArtist] = useState([]);

  useEffect(() => {
    if (Object.keys(searchLyrics).length === 0) return;

    const queryLyrics = async () => {
      // extract the values
      const { artist, song } = searchLyrics;
      const url = `https://api.lyrics.ovh/v1/${artist}/${song}`;
      const url2 = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artist}`;

      const [lyricsResult, ArtistResult] = await Promise.all([
        axios(url),
        axios(url2)
      ])
      setArtist(ArtistResult.data.artists[0]);
      setLyrics(lyricsResult.data.lyrics);
    }
    queryLyrics();

  }, [searchLyrics]);

  return (
    <Fragment>
      <Form
        setSearchLyrics={setSearchLyrics} />
      
      <div className='container mt-5'>
        <div className='row'>
          <div className='col-md-6'>
            <Artist artist={artist}/>
          </div>
          <div className='col-md-6'>
            <Song lyrics={lyrics} />
          </div>          
        </div>
      </div>


    </Fragment>
    
  );
}

export default App;
