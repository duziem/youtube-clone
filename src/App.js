import React from 'react';
import {Grid} from '@material-ui/core';
import youtube from './api/youtube';
import { SearchBar, VideoDetail, VideoList } from './components';
//import logo from './logo.svg';
//import './App.css';


//convert to a class object
class App extends React.Component{
  state= {
    videos: [],
    selectedVideo: null
  }

  componentDidMount(){
    this.handleSubmit('latest video games'); //enter a default text that will be used as a search-term at the beginning when the application is initialized/mounted
  }

  onVideoSelect= (video)=>{
    this.setState({ selectedVideo: video });
  }

  handleSubmit= async (searchTerm)=>{
    const response= await youtube.get('search', {
      params: {
        part: 'snippet',
        maxResults: 5,
        key: process.env.API_KEY,
        q: searchTerm
      }
    })

    this.setState({ videos: response.data.items, selectedVideo: response.data.items[0] })
  }


  render(){
    const {selectedVideo, videos }= this.state;

    return (
      <Grid container spacing={10}>
        <Grid item xs={12}>
          <Grid container spacing={10}>
              <Grid item xs={12}>
                {/* search bar */}
                <SearchBar onFormSubmit= { this.handleSubmit } />
              </Grid>
          </Grid>  
        </Grid>
        <Grid item xs={8}>
          {/* Selected Video */}
          <VideoDetail video={ selectedVideo } />
        </Grid>
        <Grid item xs={4} >
          {/* Video List */}
          <VideoList videos= { videos } onVideoSelect= { this.onVideoSelect } />
        </Grid>
      </Grid>

    )
  }
}

/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/
export default App;
