
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

function KappalelistaMUI (props) {
  let kappalelista = props.kappaleet.map(function(kappale, index) {
    return (
       <Card item='true' key={index} style={{ width: 350, marginTop: 40, margin: 10}}>
          <CardHeader title= { kappale.kappale.toUpperCase() }
           subheader={ kappale.albumi + ' | '+ kappale.artisti  + ' | '+ kappale.id}  />

          <CardContent>
          <Typography variant='body1' color="textSecondary" gutterBottom>Genre: { kappale.genre }</Typography>
          <CardMedia style={{ height:300 }} image={url + '/download/' + kappale.kuva} title='Albumikuva' />

          </CardContent>
<Button component={Link} to={'/muokkaa/' + kappale.id}><Edit /></Button>

       </Card>);
    });
 return ( <Grid container spacing={26}>{ kappalelista }</Grid> );
}

export default KappalelistaMUI;
