import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import './css/style.css';
import LisaalomakeMUI from './components/LisaalomakeMUI';
import Songoftheday from './components/Songoftheday';
import KappalelistaMUI from './components/KappalelistaMUI';
import MenuMUI from './navigation/MenuMUI';
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
  },
  { kappale: 'As the pages burn',
    Artisti: 'Arch Enemy',
    Albumi: 'War Eternal',
    Genre: 'Melodic death metal',
    kuva: 'https://metalrecusants.com/wp-content/uploads/2014/06/cover.jpg'
  },
  { kappale: 'Avalanche',
    Artisti: 'Arch Enemy',
    Albumi: 'War Eternal',
    Genre: 'Melodic death metal',
    kuva: 'https://metalrecusants.com/wp-content/uploads/2014/06/cover.jpg'
  },
  { kappale: 'No Gods, No Masters',
    Artisti: 'Arch Enemy',
    Albumi: 'Khaos Legions',
    Genre: 'Melodic death metal',
    kuva: 'https://upload.wikimedia.org/wikipedia/en/c/c8/Khaos_legions_cover.jpg'
  },
];

class MusiikkiApp extends Component {
  render() {
    return (
          <BrowserRouter>
      <div>
      <MuiThemeProvider theme={ theme }>


      <MenuMUI/>
      <Switch>
        <Route exact path='/' component={Songoftheday} />
        <Route exact path='/biisi' component={Songoftheday} />
        <Route path='/listaa' render={(props) => <KappalelistaMUI {...props} kappaleet={kap}/>} />
        <Route path='/lisaa' component={LisaalomakeMUI} />


      </Switch>

</MuiThemeProvider>



      </div>
        </BrowserRouter>
    );
  }
}

export default MusiikkiApp;
