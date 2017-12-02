import axios from 'axios';

var data = {rss_url: 'https://medium.com/feed/@stupendous_igg'}
//need to figure out how to create getRSS function that accepts cb for setState()
const getRSS = (cb) => {
  axios.get('https://api.rss2json.com/v1/api.json', {
      params: data
    })
    .then(function(response){
      console.log(response);
      cb();
    })
}

export default getRSS;
