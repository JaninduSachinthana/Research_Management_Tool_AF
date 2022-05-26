import React from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Divider from '@mui/material/Divider';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItemIcon from '@mui/material/ListItemIcon';
import Logout from '@mui/icons-material/Logout';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default class Navbar extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      logo:false,
      open: true
    }
  }

  profileItemOpen = () => {
    this.setState({
      logo: true
    })
  };

  profileItemclose = () => {
    this.setState({
      logo: false
    })
  };

  handleDrawerOpen = () => {
    this.setState({
      open: true
    })
  };

  handleDrawerClose = () => {
    this.setState({
      open: false
    })
  };

  onSignOut = () => {
    this.profileItemclose();

    window.location = "/"
  }

    render() {
        return (
            <>
                <Box>
            <AppBar position="fixed" color="default" mode='dark'>
              <Toolbar>
                <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="open drawer"
                  sx={{ mr: 2 }}
                  onClick={this.handleDrawerOpen}
                >
                  <MenuIcon />
                </IconButton>
                <Typography
                  variant="h6"
                  noWrap
                  component="div"
                  sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                >
                </Typography>
              
                  <SearchIcon />
                  <InputBase
                    placeholder="Search…"
                    inputProps={{ 'aria-label': 'search' }} />

                <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={this.profileItemOpen}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                sx={{
                  marginTop:"-55px"
                }}
                anchorEl={this.state.logo}
                anchorOrigin={{
                  vertical: 'center',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                  open={Boolean(this.state.logo)}
                  onClose={this.profileItemclose}
              >
                <MenuItem onClick={this.profileItemclose}>                  
                  <ListItemIcon>
                    <AccountCircleIcon fontSize="small"/>
                  </ListItemIcon>
                  Profile
                </MenuItem>
                <MenuItem onClick={this.onSignOut}>
                  <ListItemIcon>
                    <Logout fontSize="small" />
                  </ListItemIcon>
                  Sign Out
                </MenuItem>
              </Menu>
              </Toolbar>
            </AppBar>
          </Box>

          <Drawer
            sx={{
              width: 200,
              flexShrink: 0,
              '& .MuiDrawer-paper': {
                width: 250,
                boxSizing: 'border-box',
                marginTop:10
              },
            }}
            variant="persistent"
            anchor="left"
            open={this.state.open}
      >
          <ListItemIcon>
            <IconButton onClick={this.handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          </ListItemIcon>
          
        <Divider />
        <List>
            <ListItem  disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  Home
                </ListItemIcon>
                <ListItemText />
              </ListItemButton>
            </ListItem>
        </List>
        <Divider />
        <List>          
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                Research Topics Accepting
              </ListItemIcon>
              <ListItemText />
            </ListItemButton>
          </ListItem>
        </List>
        <Divider />
        <List>          
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                Research Groups Chat
              </ListItemIcon>
              <ListItemText />
            </ListItemButton>
          </ListItem>
        </List>
        <Divider />
        <List>          
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                Document Evaluation
              </ListItemIcon>
              <ListItemText />
            </ListItemButton>
          </ListItem>
        </List>        
        <Divider />
        <List>          
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                Contact us
              </ListItemIcon>
              <ListItemText />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
            </>
        )
    }
}