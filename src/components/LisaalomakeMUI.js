import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import Typography from '@material-ui/core/Typography';
import Input from '@material-ui/core/Input';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { Create, Clear, Attachment } from '@material-ui/icons';
import { withStyles } from '@material-ui/core/styles';
import {BrowserRouter, Route, Switch, Link, Redirect} from "react-router-dom";


import axios from 'axios';

const url = 'http://localhost:8080';

class LisaalomakeMUI extends Component {
  constructor(props) {
      super(props);
      this.state = { Kappale: '', Artisti: '', Albumi:'', Genre: '', kuva: null, viesti: '' };
  }

  muuta = (e) => {
    this.setState( { [e.target.name]: e.target.value } );
  }
  lisaa = (e) => {
    e.preventDefault();

        const formData = new FormData();
        formData.append('kappale', this.state.kappale);
        formData.append('artisti', this.state.Artisti);
        formData.append('albumi', this.state.Albumi);
        formData.append('genre', this.state.Genre);
        formData.append('kuva', this.state.kuva);
        axios.post(url + '/kappale/add', formData)
         .then(response => {
            if (response.status === 200) {
               this.setState({viesti: 'Lisättiin'});
               this.tyhjenna();
            } else {
               this.setState({ viesti: 'Lisäys ei onnistunut'});
            }
         })
  }

  tyhjenna = (e) => {
    //e.preventDefault();
    this.setState( {  kappale: '', Artisti: '', Albumi:'', Genre: '', kuva: null } );
  }

  muutaKuva = (e) => {
    this.setState( { [e.target.name]: e.target.files[0] } );
  }


  render() {

    if (this.state.viesti === 'Lisättiin') {
    return (
    <Redirect to={ {pathname: '/listaa'} } />
    )
    }


    let kuvanNimi = '';
    if (this.state.kuva !== null) {
      kuvanNimi = this.state.kuva.name;
    }

    const { classes } = this.props;
    return (
      <div>
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
        <Button onClick={this.lisaa} variant='contained' color='primary' className={ classes.button }><Create /> Lisää</Button>

        <Button onClick={this.tyhjenna} variant='contained'  color='secondary' className={ classes.button }><Clear /> Tyhjennä</Button>
      </form>

      </div>

    );

  }
}

const styles = {
  field: { display: 'block', margin: 10},
  button: { marginRight: 20}
}

export default withStyles(styles)(LisaalomakeMUI);
