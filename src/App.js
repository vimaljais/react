import React, { Component } from "react";
import "./App.css";
import ImageGridList from "./Components/imagesList";
import SearchForm from "./Components/searchForm";
import axios from "axios";
import { Button } from "@material-ui/core";

class App extends Component {
  constructor() {
    super();
    this.state = {
      images: [],
      isLoaded: false,
      query: "Random Images",
      active: "Random Images",
    };
  }

  componentDidMount() {
    this.imageSearch();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.query !== this.state.query) {
      this.imageSearch();
    }
  }

  onSubmit = (search) => {
    this.setState({ query: search });
    this.setState({ active: search });
  };
  onCollectionSubmit = (id) => {
    console.log(id);
    axios
      .get(
        `https://api.unsplash.com/collections/${id}/photos?client_id=wuq1Fw10R6HLmkRHRy-aMA1Dqn2iBxRHWOF_RG8X_H8`
      )
      .then((data) => {
        this.setState({ images: data.data, isLoaded: true });
        this.setState({ active: `Collection ${id}` });
      });
  };
  imageSearch = () => {
    const unsplashApi = "wuq1Fw10R6HLmkRHRy-aMA1Dqn2iBxRHWOF_RG8X_H8";
    const q = this.state.query;
    if (q.length > 0) {
      axios
        .get(
          `https://api.unsplash.com/search/photos/?per_page=100&query=${q}&client_id=${unsplashApi}&count=10`
        )
        .then((data) => {
          this.setState({ images: data.data.results, isLoaded: true });
        });
    }
  };

  render() {
    return (
      <div className="App">
        <h1 className="title">UNSPLASH</h1>
        <div className="title">
          <Button onClick={() => this.onCollectionSubmit(1580860)}>
            Collection 1
          </Button>
          <Button onClick={() => this.onCollectionSubmit(139386)}>
            Collection 2
          </Button>
        </div>

        <SearchForm
          query={this.state.query}
          onSubmit={this.onSubmit}
          onSearch={this.imageSearch}
        />
        <p className="title" style={{ paddingBottom: "10px" }}>
          Currently Showing - {this.state.active}
        </p>
        <ImageGridList images={this.state.images} />
      </div>
    );
  }
}

export default App;
