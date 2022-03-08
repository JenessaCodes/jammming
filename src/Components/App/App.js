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
    };
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
            <SearchResults searchResults="this.state.searchResults" />
            <Playlist />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
