import React, { Component } from 'react';
import MenuMUI from '../navigation/MenuMUI';
import Typography from '@material-ui/core/Typography';
import KappalelistaMUI from '../components/KappalelistaMUI';

const url = 'http://localhost:8080';
class HaeBiisit extends Component {
constructor(props) {
super(props);
this.state = {kappaleet: [], virhe: ''};
}

componentDidMount = () => {
this.haeKaikkiBiisit();
}

haeKaikkiBiisit = () => {
return fetch(url + '/kappale/all')
.then((response) => response.json())
.then((responseJson) => {
this.setState({kappaleet: responseJson, virhe: ''});
})
.catch((error) => {
this.setState({kappaleet: [], virhe: 'Tietojen haku ei onnistunut'});
})
}

render() {
  
  if (this.state.kappaleet.length !== 0) {
     return (<KappalelistaMUI kappaleet={this.state.kappaleet}/>)
  }
  else if (this.state.kappaleet.length === 0 && this.state.virhe.length !== 0) {
     return (<Typography style={{ color: 'red', marginTop: 40}}>{this.state.virhe}</Typography>)
  }
  else {
     return (<Typography style={{ color: 'blue', marginTop: 40}}>Ei listattavaa</Typography>)
  }
}
}
export default HaeBiisit;
