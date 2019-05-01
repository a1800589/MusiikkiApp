import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import Typography from '@material-ui/core/Typography';
import Input from '@material-ui/core/Input';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { Create, Clear, Attachment, Edit, Delete } from '@material-ui/icons';
import { withStyles } from '@material-ui/core/styles';
import {BrowserRouter, Route, Switch, Link, Redirect} from "react-router-dom";


import axios from 'axios';

const url = 'http://localhost:8080';

class MuokkaaLomakeMUI extends Component {
  constructor(props) {
      super(props);
      this.state = { id: '', Kappale: '', Artisti: '', Albumi:'', Genre: '', kuva: null, viesti: '', muutettu: false };
  }

  componentDidMount = () => {
  const { match: { params } } = this.props;
  this.setState({id: params.id});
  }

  muuta = (e) => {
    this.setState( { [e.target.name]: e.target.value } );
  }
  lisaa = (e) => {
    //e.preventDefault();

        const formData = new FormData();
        formData.append('kappale', this.state.kappale);
        formData.append('artisti', this.state.Artisti);
        formData.append('albumi', this.state.Albumi);
        formData.append('genre', this.state.Genre);
        formData.append('kuva', this.state.kuva);
        formData.append('id', this.state.id);
        axios.post(url + '/kappale/muokkaa/'+this.state.id,formData)
         .then(response => {
            if (response.status === 200) {
               this.setState({viesti: 'Muokattiin'});
               this.tyhjenna();
            } else {
               this.setState({ viesti: 'Muokkaus ei onnistunut'});
            }
         })
  }

  poista = (id) => {
return fetch(url + '/kappale/delete/'+this.state.id)
  this.setState({muutettu: true});


  }

  tyhjenna = (e) => {
  //  e.preventDefault();
    this.setState( {  kappale: '', Artisti: '', Albumi:'', Genre: '', kuva: null } );
  }

  muutaKuva = (e) => {
    this.setState( { [e.target.name]: e.target.files[0] } );
  }


  render() {

    let kuvanNimi = '';
    if (this.state.kuva !== null) {
      kuvanNimi = this.state.kuva.name;
    }

    const { classes } = this.props;
    return (
      <form>
        <TextField label='Biisi' name='kappale' value={ this.state.kappale }
               onChange={ this.muuta } margin='normal' required
               className={ classes.field } />

        <TextField label='Artisti' name='Artisti' value={ this.state.Artisti }
               onChange={ this.muuta }  margin='normal' required
               className={ classes.field } />
        <TextField label='Albumi' name='Albumi' value={ this.state.Albumi }
               onChange={ this.muuta } margin='normal' required
               className={ classes.field } />
        <TextField label='Genre' name='Genre' value={ this.state.Genre }
               onChange={ this.muuta } margin='normal'
               className={ classes.field } />
               <Input accept='image/*' name='kuva' id='kuva' type='file'
                   style={{display: 'none'}}
                   onChange={this.muutaKuva} />

               <InputLabel htmlFor='kuva'>
                 Kuva
                 <Button component='span'><Attachment /></Button>
                 {kuvanNimi}
               </InputLabel>
   <br/>   <br/>
  <br/>
        <Button onClick={this.lisaa} variant='contained' color='primary' className={ classes.button }><Create /> Muokkaa</Button>

        <Button onClick={this.poista} variant='contained'  color='secondary' className={ classes.button }><Delete /> Poista</Button>
      </form>
    );

    if (this.state.muutettu === true) {
    return (
    <Redirect to={ {pathname: '/listaa'} } />
    )
    }


  }
}

const styles = {
  field: { display: 'block', margin: 10},
  button: { marginRight: 20}
}

export default withStyles(styles)(MuokkaaLomakeMUI);
