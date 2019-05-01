import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import {Home, AccountCircle, Create, List, Menu as MenuIcon,  Settings,  ExitToApp } from '@material-ui/icons';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from 'react-router-dom'

class MenuMUI extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      anchorEl1: null,
      anchorEl2: null,
    };
  }

  handleMenu = (event) => {
      this.setState({ anchorEl1: event.currentTarget });
  };

  handlePerson = (event) => {
      this.setState({ anchorEl2: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl1: null, anchorEl2: null });
  };

  render() {
    const menu =
      <Menu
      anchorEl={this.state.anchorEl1}
      open={Boolean(this.state.anchorEl1)}
      onClose={this.handleClose}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      >
      <MenuItem key="placeholder" style={{display: "none"}} />
        <MenuItem onClick={this.handleClose} component={Link} to='/biisi'><Home />
            <ListItemText inset primary="Etusivu" />
        </MenuItem>
        <MenuItem onClick={this.handleClose} component={Link} to='/lisaa'><Create />
            <ListItemText inset primary="Lisää" />
        </MenuItem>
        <MenuItem onClick={this.handleClose} component={Link} to='/listaa' ><List />
            <ListItemText inset primary="Biisilista" />
        </MenuItem>

      </Menu>;



    return (
      <div>
        <AppBar position='static'>
          <Toolbar>
            <IconButton onClick={ this.handleMenu } color='inherit' ><MenuIcon /></IconButton>
            { menu }
            <Typography variant='h5' color='inherit' style={ {flexGrow: 1, textAlign: 'center'} }>MusiikkiApp</Typography>

          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default  MenuMUI;
