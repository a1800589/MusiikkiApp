import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

function KappalelistaMUI (props) {
  let kappalelista = props.kappaleet.map(function(kappale, index) {
    return (
       <Card item='true' key={index} style={{ width: 350, marginTop: 40, margin: 10}}>
          <CardHeader title= { kappale.kappale.toUpperCase() }
                      subheader={ kappale.Albumi + ' | '+ kappale.Artisti}  />

          <CardContent>
<Typography variant='body1' color="textSecondary" gutterBottom>Genre: { kappale.Genre }</Typography>
            <CardMedia style={{ height:300 }} image={kappale.kuva} title='Albumikuva' />



          </CardContent>
       </Card>);
    });
 return ( <Grid container spacing={26}>{ kappalelista }</Grid> );
}

export default KappalelistaMUI;
