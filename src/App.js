import React, { Component } from 'react';
import axios from 'axios';

var data = {rss_url: 'https://medium.com/feed/@stupendous_igg'}

class App extends Component {
  constructor(){
    super();
    this.state = {
      isLoading: true,
      axiosResponse: {}
    }
  };

  componentDidMount(){
    var that = this;
    axios.get('https://api.rss2json.com/v1/api.json', {
        params: data
      })
      .then(function (response) {
        console.log(response);
        setTimeout(function() {
          that.setState({
            axiosResponse: response.data,
            isLoading: false
          })
        }, 1500); 
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  render() {
    if(this.state.isLoading){
      return <div>Waiting...</div>
    }

    return (
      <div className="App">
        <h1 className="App-title">{this.state.axiosResponse.feed.url}</h1>
      </div>
    );
  }
}

export default App;
