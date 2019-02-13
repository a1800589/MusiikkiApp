import React, { Component } from 'react';
import './css/style.css';
import Lisaalomake from './components/Lisaalomake';
import Songoftheday from './components/Songoftheday';
import Kappalelista from './components/Kappalelista';

const kap = [
  { kappale: 'The Eagle Flies alone',
    Artisti: 'Arch Enemy',
    Albumi: 'Will to Power',
    Genre: 'Melodic death metal',
    kuvaus: 'aaaa'
  },
  { kappale: 'Reason to Believe',
    Artisti: 'Arch Enemy',
    Albumi: 'Will to Power',
    Genre: 'Melodic death metal',
    kuvaus: 'bbb'
  },
  { kappale: 'The World is Yours',
    Artisti: 'Arch Enemy',
    Albumi: 'Will to Power',
    Genre: 'Melodic death metal',
    kuvaus: 'ccc'
  }
];

class MusiikkiApp extends Component {
  render() {
    return (
      <div>
      <h1> MusiikkiApp by Teemu</h1>

      <Lisaalomake/>
      <Kappalelista  kappaleet={ kap }/>
      <Songoftheday/>



      </div>
    );
  }
}

export default MusiikkiApp;
