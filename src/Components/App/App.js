import React, { Component } from "react";
import "./App.css";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [
        {
          id: 1,
          name: "Fake Track 1",
          artist: "Fake Artist 1",
          album: "Fake Album 1",
        },
        {
          id: 2,
          name: "Fake Track 2",
          artist: "Fake Artist 2",
          album: "Fake Album 2",
        },
        {
          id: 3,
          name: "Fake Track 3",
          artist: "Fake Artist 3",
          album: "Fake Album 3",
        },
      ],
      playlistName: "Fake Playlist",
      playlistTracks: [
        {
          id: 4,
          name: "Fake Track 4",
          artist: "Fake Artist 4",
          album: "Fake Album 4",
        },
        {
          id: 5,
          name: "Fake Track 5",
          artist: "Fake Artist 5",
          album: "Fake Album 5",
        },
        {
          id: 6,
          name: "Fake Track 6",
          artist: "Fake Artist 6",
          album: "Fake Album 6",
        },
      ],
    };
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
  }

  addTrack(track) {
    let tracks = this.state.playlistTracks;
    if (tracks.find((savedTrack) => savedTrack.id === track.id)) {
      return;
    }

    this.setState({ playlistTracks: [...tracks, track] });
  }

  removeTrack(track) {
    let tracks = this.state.playlistTracks;
    let newTracks = tracks.filter((savedTrack) => savedTrack.id !== track.id);
    this.setState({ playlistTracks: newTracks });
  }

  render() {
    return (
      <div>
        <h1>
          Ja<span className="highlight">mmm</span>ing
        </h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults
              searchResults={this.state.searchResults}
              onAdd={this.addTrack}
            />
            <Playlist
              playlistName={this.state.playlistName}
              playlistTracks={this.state.playlistTracks}
              onRemove={this.removeTrack}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
