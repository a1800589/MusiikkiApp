import React, { Component } from 'react';
import './css/style.css';
import LisaalomakeMUI from './components/LisaalomakeMUI';
import Songoftheday from './components/Songoftheday';
import KappalelistaMUI from './components/KappalelistaMUI';
import TabMUI from './navigation/TabMUI';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme(
{
palette: {
primary: { main: '#79cff7', contrastText: "#ffffff" },
secondary: { main: '#ff0000', contrastText: "#ffffff" },
text: { primary: '#000000', contrastText: "#ffffff" },
action: { hover: '#ff0000' }
}
});

const kap = [
  { kappale: 'The Eagle Flies alone',
    Artisti: 'Arch Enemy',
    Albumi: 'Will to Power',
    Genre: 'Melodic death metal',
    kuva: 'https://metalshockfinland.files.wordpress.com/2017/06/archenemy-cover.jpg'
  },
  { kappale: 'Reason to Believe',
    Artisti: 'Arch Enemy',
    Albumi: 'Will to Power',
    Genre: 'Melodic death metal',
    kuva: 'https://metalshockfinland.files.wordpress.com/2017/06/archenemy-cover.jpg'
  },
  { kappale: 'The World is Yours',
    Artisti: 'Arch Enemy',
    Albumi: 'Will to Power',
    Genre: 'Melodic death metal',
    kuva: 'https://metalshockfinland.files.wordpress.com/2017/06/archenemy-cover.jpg'
  }
];

class MusiikkiApp extends Component {
  render() {
    return (
      <div>
      <MuiThemeProvider theme={ theme }>
      <h1> MusiikkiApp by Teemu</h1>
<TabMUI  kappaleet={kap}/>
</MuiThemeProvider>



      </div>
    );
  }
}

export default MusiikkiApp;
