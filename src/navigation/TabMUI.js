import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {Home, Create, List, CloudQueue} from '@material-ui/icons';
import Songoftheday from '../components/Songoftheday';
import KappalelistaMUI from '../components/KappalelistaMUI';
import LisaalomakeMUI from '../components/LisaalomakeMUI';


class TabMUI extends React.Component {

  constructor(props) {
    super(props);
    this.state = { value: 0, kappalelista: this.props.kappaleet };
  }

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <AppBar position='static'>
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            centered
          >
            <Tab label="Etusivu" icon={ <Home /> } />
            <Tab label="Kapplelista" icon={ <List /> } />
            <Tab label="Lisää" icon={<Create /> } />

          </Tabs>
        </AppBar>
        {this.state.value === 0 && <Songoftheday /> }
        {this.state.value === 1 && <KappalelistaMUI kappaleet={this.state.kappalelista}/> }
        {this.state.value === 2 && <LisaalomakeMUI/> }

      </div>
    );
  }
}

export default TabMUI;
