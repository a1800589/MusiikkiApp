import React, { Component } from 'react';
import {BrowserRouter, Route, Switch, Link} from "react-router-dom";
import './css/style.css';
import LisaalomakeMUI from './components/LisaalomakeMUI';
import Songoftheday from './components/Songoftheday';
import KappalelistaMUI from './components/KappalelistaMUI';
import MenuMUI from './navigation/MenuMUI';
import HaeBiisit from './components/HaeBiisit';
import MuokkaaLomakeMUI from './components/MuokkaaLomakeMUI';
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
        <Route path='/listaa' component={HaeBiisit} />
        <Route path='/lisaa' component={LisaalomakeMUI} />
<Route path='/muokkaa/:id' component={MuokkaaLomakeMUI} />

      </Switch>

</MuiThemeProvider>



      </div>
        </BrowserRouter>
    );
  }
}

export default MusiikkiApp;
