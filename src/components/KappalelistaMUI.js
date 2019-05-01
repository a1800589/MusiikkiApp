
import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {Link} from "react-router-dom";
import { Create, Clear, Attachment, Edit, Delete } from '@material-ui/icons';


const url = 'http://localhost:8080';

class KappalelistaMUI extends Component {
  constructor(props) {
    super(props);
    this.state = { kappaleet: this.props.kappaleet}
  }

  poista = (id) => {
    return fetch(url + '/kappale/delete/'+this.state.id)
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState(prevState => ({kappaleet: prevState.kappaleet.filter(kappale => kappale.id !== id)
      }));
    })
    }

render(){

    if (this.state.kappaleet.length === 0)
     {
    return (<Typography variant='body1'>Yhtään kappaletta ei löytynyt</Typography>)
    }


    return(
      <Grid container spacing={26}>
      { this.state.kappaleet.map(kappaleet => {
return(
  <Grid item key={kappaleet.id}>

  <Card style={{ width: 350, marginTop: 40, margin: 10}}>

     <CardHeader title= { kappaleet.kappale.toUpperCase() }
      subheader={ kappaleet.albumi + ' | '+ kappaleet.artisti  + ' | '+ kappaleet.id}  />

     <CardContent>

     <Typography variant='body1' color="textSecondary" gutterBottom>Genre: { kappaleet.genre }</Typography>
     <CardMedia style={{ height:300 }} image={url + '/download/' + kappaleet.kuva} title='Albumikuva' />


  <Button component={Link} to={'/muokkaa/' + kappaleet.id}><Edit /></Button>
  <Button onClick={this.poista.bind(this, kappaleet.id)}><Delete /></Button>
  </CardContent>
  </Card>
</Grid>
)
})
}</Grid>)}}

export default KappalelistaMUI;
