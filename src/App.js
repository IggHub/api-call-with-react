import React, { Component } from 'react';
import axios from 'axios';
import {Button, ButtonToolbar, Image} from 'react-bootstrap';

//add this and refactor later
//import getRSS from './utils/client';
import mediumHelper from './utils/helpers';

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
        console.log(response.data.items);
        setTimeout(function() {
          that.setState({
            axiosResponse: response.data,
            isLoading: false
          })
        }, 500);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  render() {
    if(this.state.isLoading){
      return <div>Waiting...</div>
    }
    const mediumPostItems = this.state.axiosResponse.items.filter(el => el.categories.length > 0);
    console.log(mediumPostItems[2]);
    return (
      <div>
        <h1 className="App-title">{this.state.axiosResponse.feed.url}</h1>
        {mediumPostItems.map((post, index) =>
          <div key={index}>
            <div><Image src={mediumHelper.imageSearcher(post.description)} width="300px" height="200px" rounded /></div>
            <div>{post.title}</div>
            <div>By {post.author}</div>
            <div>{mediumHelper.humanReadableDate(post.pubDate)}</div>
            <div>{mediumHelper.descriptionCleaner(post.description)}</div>
          </div>
        )}
        <ButtonToolbar>
          <Button bsStyle="primary" bsSize="large">Large button</Button>
          <Button bsSize="large">Large button</Button>
        </ButtonToolbar>
      </div>
    );
  }
}

export default App;
