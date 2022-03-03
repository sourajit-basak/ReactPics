import React from "react";
import Unsplash from "../api/Unsplash";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

class App extends React.Component {
  state = { imageArr: [] };
  onSearchSubmit = async (text) => {
    // console.log("from app", text);
    const response = await Unsplash.get("search/photos", {
      params: { query: text },
    });
    this.setState({ imageArr: response.data.results });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSearchBarSubmit={this.onSearchSubmit} />
        Found : {this.state.imageArr.length} images
        <ImageList images={this.state.imageArr} />
      </div>
    );
  }
}

export default App;
