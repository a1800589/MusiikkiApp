import React, { Component } from 'react';
import '../css/style.css';

class Lisaalomake extends Component {
  constructor(props) {
      super(props);
      this.state = { kappale: '', Artisti: '', Albumi:'', Genre: '', kuvaus: '' };
  }

  muuta = (e) => {
    this.setState( { [e.target.name]: e.target.value } );
  }

  lisaa = (e) => {
    e.preventDefault();
  }

  tyhjenna = (e) => {
    e.preventDefault();
    this.setState( {  kappale: '', Artisti: '', Albumi:'', Genre: '', kuvaus: '' } );
  }

  render() {
    return (
      <div>
      <form onSubmit={this.muuta}>
        <label  htmlFor='kappale'>Kappale</label>
        <input type='text' name='kappale' value={ this.state.kappale }
               onChange={ this.muuta } />
        <br />
        <label  htmlFor='Artisti'>Artisti</label>
        <input type='text' name='Artisti' value={ this.state.Artisti }
               onChange={ this.muuta } />
        <br />
        <label  htmlFor='Albumi'>Albumi</label>
        <input type='text' name='Albumi' value={ this.state.Albumi }
               onChange={ this.muuta } />
        <br />
        <label  htmlFor='Genre'>Genre</label>
        <input type='text' name='Genre' value={ this.state.Genre }
               onChange={ this.muuta } />
        <br />
        <label htmlFor='kuvaus'>Kuvaus</label>
        <textarea name='kuvaus' rows='2' cols='15' value={ this.state.kuvaus }
                  onChange={ this.muuta }></textarea>
        <br />
        <input type='button' value='Lisää' onClick={ this.lisaa } />
        &nbsp;
        <input type='button' value='Tyhjennä' onClick={ this.tyhjenna } />
      </form>

      <p>
      Kappale: { this.state.kappale }<br />
      Artisti: { this.state.Artisti }<br />
      Albumi: { this.state.Albumi }<br />
      Genre: { this.state.Genre }<br />
      Kuvaus: { this.state.kuvaus }<br />
      _________________________________
      </p>
      </div>
    );
  }
}

export default Lisaalomake;
