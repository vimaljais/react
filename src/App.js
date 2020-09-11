import React, { Component } from 'react';
import './App.css';
import ImagesList from './Components/imagesList';
import SearchForm from './Components/searchForm';
import axios from 'axios';

class App extends Component {

  constructor() {
    super();
    this.state = {
      images: [],
      loadingState: true
    };
  }

  componentDidMount() {
    this.imageSearch();
  }
  imageSearch = (query = 'wallpapers') => {
    axios
      .get(
        `https://api.unsplash.com/search/photos/?per_page=100&query=${query}&client_id=wuq1Fw10R6HLmkRHRy-aMA1Dqn2iBxRHWOF_RG8X_H8`
      )
      .then(data => {
        this.setState({ images: data.data.results, loadingState: false });
      })
  };


  render(){
    return (
      <div className="App">
        <div className="main-header">
          <div className="inner">
            <h1 className="main-title">UNSPLASH</h1>
            <SearchForm onSearch={this.imageSearch} />
          </div>

        </div>
        <div className="main-content">
          {this.state.loadingState ? <div class="ldBar"></div>:
            <ImagesList data={this.state.images} />
            }
        </div>
      </div>
    );
  }
  
}

export default App;
