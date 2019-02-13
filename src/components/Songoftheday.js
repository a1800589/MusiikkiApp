import React, { Component } from 'react';
import '../css/style.css';
class Songoftheday extends Component {

  constructor(props) {
      super(props);
      this.state = { title: '', date: '' };
  }

  componentDidMount = () => {
    return fetch(' https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Ffeeds.publicradio.org%2Fpublic_feeds%2Fsong-of-the-day%2Frss%2Frss')
     .then((response) => response.json())
     .then((responseJson) => {
       this.setState({
         title: responseJson.items[0].title,
         date: responseJson.items[0].pubDate
       });
     })
     .catch((error) => {
       console.error(error);
       this.setState({
         title: "Error",
         date: "Couldn't fetch info"
       });
     })

 }

  render () {
    return (
<div>
<h4> Päivän biisi</h4>
      <p>

        { this.state.title } <br />
        { this.state.date }
      </p>
      </div>
    );
  }


}

export default Songoftheday;
