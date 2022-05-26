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
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import PeopleAltRoundedIcon from '@mui/icons-material/PeopleAltRounded';
import PersonAddAltRoundedIcon from '@mui/icons-material/PersonAddAltRounded';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import AssignmentRoundedIcon from '@mui/icons-material/AssignmentRounded';
import PostAddRoundedIcon from '@mui/icons-material/PostAddRounded';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';

export default class Navbar extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      logo:false,
      open: true,
      userEx: false,
      asg:false,
      schema:false
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

  handleUserOpen = () => {
    if(this.state.userEx != true) {
      this.setState({userEx:true})
    }else{
      this.setState({userEx:false})
    }
    
  };

  handleAsgOpen = () => {
    if(this.state.asg != true) {
      this.setState({asg:true})
    }else{
      this.setState({asg:false})
    }
    
  };

  handleSchemaOpen = () => {
    if(this.state.schema != true) {
      this.setState({schema:true})
    }else{
      this.setState({schema:false})
    }
    
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
                  marginTop:"-40px"
                }}
                anchorEl={this.state.logo}
                anchorOrigin={{
                  vertical: 'top',
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
              <ListItemButton
                component="a" 
                href="/Admin" >
                <ListItemIcon>
                  <HomeRoundedIcon />                  
                </ListItemIcon>
                  Home
                <ListItemText />
              </ListItemButton>
            </ListItem>
        </List>
        <Divider />
        <List>          
          <ListItem disablePadding>
            <ListItemButton onClick={this.handleUserOpen}>
              <ListItemIcon>
                <PeopleAltRoundedIcon />                
              </ListItemIcon>
                Users
              <ListItemText />
              {this.state.userEx == true ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
          </ListItem>
        </List>
        <Collapse in={this.state.userEx} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton 
              component="a" 
              href="/Admin/StudentReg"
              sx={{ pl: 4 }}>
              <ListItemIcon>
                <PersonAddAltRoundedIcon />
              </ListItemIcon>
                Student Registration
              <ListItemText />
            </ListItemButton>
          </List>
          <Divider />
          <List component="div" disablePadding>
            <ListItemButton 
              component="a" 
              href="/Admin/StaffRegister"
              sx={{ pl: 4 }}>
              <ListItemIcon>
                <PersonAddAltRoundedIcon />
              </ListItemIcon>
                Staff Registration
              <ListItemText />
            </ListItemButton>
          </List>
          <Divider />
          <List component="div" disablePadding>
            <ListItemButton 
              component="a" 
              href="/Admin/AdminRegister"
              sx={{ pl: 4 }}>
              <ListItemIcon>
                <PersonAddAltRoundedIcon />
              </ListItemIcon>
                Admin Registration
              <ListItemText />
            </ListItemButton>
          </List>
        </Collapse>
        <Divider />
        <List>          
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
              Research Topics
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
                Research Groups
              </ListItemIcon>
              <ListItemText />
            </ListItemButton>
          </ListItem>
        </List>
        <Divider />
        <List>          
          <ListItem disablePadding>
            <ListItemButton
              onClick={this.handleAsgOpen}>
              <ListItemIcon>
                <AssignmentRoundedIcon />
              </ListItemIcon>
                Assignment
              <ListItemText />
              {this.state.asg == true ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
          </ListItem>
        </List>
        <Collapse in={this.state.asg} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton 
              component="a" 
              href="/Admin/AddAssignment"
              sx={{ pl: 4 }}>
              <ListItemIcon>
                <PostAddRoundedIcon />
              </ListItemIcon>
                Assignment Create
              <ListItemText />
            </ListItemButton>
          </List>
          <Divider />
          <List component="div" disablePadding>
            <ListItemButton 
              component="a" 
              href="/Admin/ViewAssignment"
              sx={{ pl: 4 }}>
              <ListItemIcon>
                <AssignmentOutlinedIcon />
              </ListItemIcon>
                Assignment View
              <ListItemText />
            </ListItemButton>
          </List>
          <Divider />
        </Collapse>        
        <Divider />
        <List>          
          <ListItem disablePadding>
            <ListItemButton
              onClick={this.handleSchemaOpen}>
              <ListItemIcon>
                <AssignmentRoundedIcon />
              </ListItemIcon>
                Marking Schemes
              <ListItemText />
              {this.state.asg == true ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
          </ListItem>
        </List>
        <Collapse in={this.state.schema} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton 
              component="a" 
              href={`/Admin/AddSchema`}
              sx={{ pl: 4 }}>
              <ListItemIcon>
                <PostAddRoundedIcon />
              </ListItemIcon>
                Schemes Create
              <ListItemText />
            </ListItemButton>
          </List>
        </Collapse>        
        <Divider />
      </Drawer>
            </>
        )
    }
}