import React, { Component } from 'react';
import axios from 'axios';
import {Grid, Row, Col, Thumbnail, Image} from 'react-bootstrap';
import './App.css';
import CardPlaceholder from './components/CardPlaceholder';
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
        }, 3000);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  render() {
    if(this.state.isLoading){
      return <CardPlaceholder />
    }
    const mediumPostItems = this.state.axiosResponse.items.filter(el => el.categories.length > 0);
    console.log(mediumPostItems[0]);
    return (
      <Grid>

        <Row>
          {mediumPostItems.map((post, index) =>
            <Col xs={12} sm={6} md={4} key={index} className="card-col">
              <div className="card">
                <div>
                  <Image src={mediumHelper.imageSearcher(post.description)} width="360px" height="240px" responsive />
                </div>
                <div className="card-content-wrapper">
                  <h3>{post.title.length > 20 ? post.title.substring(0, 20) + "..." : post.title}</h3>
                  <h6 className="card-author">By {post.author} on {mediumHelper.humanReadableDate(post.pubDate)}</h6>

                  <p className="card-description">{mediumHelper.descriptionCleaner(post.description)}...</p>
                </div>
              </div>
            </Col>
          )}
        </Row>
      </Grid>
    );
  }
}

export default App;
