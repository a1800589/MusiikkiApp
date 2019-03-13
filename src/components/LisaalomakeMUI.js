import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Create, Clear } from '@material-ui/icons';
import { withStyles } from '@material-ui/core/styles';

class LisaalomakeMUI extends Component {
  constructor(props) {
      super(props);
      this.state = { Kappale: '', Artisti: '', Albumi:'', Genre: '', kuva: '' };
  }

  muuta = (e) => {
    this.setState( { [e.target.name]: e.target.value } );
  }
  lisaa = (e) => {
    e.preventDefault();
  }

  tyhjenna = (e) => {
    e.preventDefault();
    this.setState( {  kappale: '', Artisti: '', Albumi:'', Genre: '', kuva: '' } );
  }

  render() {
    const { classes } = this.props;
    return (
      <form>
        <TextField label='Kappale' name='kappale' value={ this.state.kappale }
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
        <TextField label='Kuva' name='kuva' value={ this.state.kuva }
              onChange={ this.muuta } margin='normal'
              className={ classes.field } />
        <Button onClick={this.lisaa} variant='contained' color='primary' className={ classes.button }><Create /> Lisää</Button>
        <Button onClick={this.tyhjenna} variant='contained'  color='secondary' className={ classes.button }><Clear /> Tyhjennä</Button>
      </form>
    );
  }
}

const styles = {
  field: { display: 'block', margin: 10},
  button: { marginRight: 20}
}

export default withStyles(styles)(LisaalomakeMUI);
