import React from 'react';

import './../../component/css/Page.css'

import Navbar from './nav-bar';

import FormGroup from '@mui/material/FormGroup';
import TextField from '@mui/material/TextField';
import ListItemIcon from '@mui/material/ListItemIcon';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import MailRoundedIcon from '@mui/icons-material/MailRounded';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import CallRoundedIcon from '@mui/icons-material/CallRounded';
import AccountBoxRoundedIcon from '@mui/icons-material/AccountBoxRounded';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import ApartmentRoundedIcon from '@mui/icons-material/ApartmentRounded';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import Button from '@mui/material/Button';
import DialogTitle from '@mui/material/DialogTitle';

export default class AdminRegister extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            name:"",
            email: "",
            address: "",
            contact: "",
            nic:"",
            department: "",
            open:false
        }
    }

    onChageSelectedDep = (e) => {
        this.setState({department: e.target.value});
    }   
    
    onChange = (e) => {        
        this.setState({[e.target.id]: e.target.value});
    }

    onSubmit = () => {
        this.handleClose();

        const Staff = {
            name: this.state.name,
            email: this.state.email,
            address: this.state.address,
            contact: this.state.contact,
            nic:this.state.nic,
            department:this.state.department
        }
        console.log(Staff);
    }

    handleClickOpen = () => {
        this.setState({open: true});
    };
    
    handleClose = () => {
        this.setState({open: false});
    };

    render() {
        return (
            <>
                <Navbar/>
                
                <div className="AllView">
                    <h1> Admin Register </h1>

                    <FormGroup sx={{ 
                        width:400,
                        marginLeft:40,
                        marginBottom:5,                        
                        }}>
                        <ListItemIcon>
                            <AccountCircleRoundedIcon fontSize="small" />
                        </ListItemIcon>
                        <TextField 
                            id="name" 
                            label="Name" 
                            variant="standard"
                            onChange={(e) => this.onChange(e)}
                            size="medium" required/>
                    </FormGroup>

                    <FormGroup sx={{ 
                        width:400,
                        marginLeft:40,
                        marginBottom:5,                        
                        }}>
                        <ListItemIcon>
                            <MailRoundedIcon fontSize="small" />
                        </ListItemIcon>
                        <TextField 
                            id="email" 
                            label="Email" 
                            variant="standard"
                            onChange={(e) => this.onChange(e)}
                            size="medium" required/>
                    </FormGroup>

                    <FormGroup sx={{ 
                        width:400,
                        marginLeft:40,
                        marginBottom:5,                        
                        }}>
                        <ListItemIcon>
                            <HomeRoundedIcon fontSize="small" />
                        </ListItemIcon>
                        <TextField 
                            id="address" 
                            label="Address" 
                            variant="standard"
                            onChange={(e) => this.onChange(e)}
                            size="medium" required/>
                    </FormGroup>

                    <FormGroup sx={{ 
                        width:400,
                        marginLeft:40,
                        marginBottom:5,                        
                        }}>
                        <ListItemIcon>
                            <CallRoundedIcon fontSize="small" />
                        </ListItemIcon>
                        <TextField 
                            id="contact" 
                            label="Contact No" 
                            variant="standard"
                            onChange={(e) => this.onChange(e)}
                            size="medium" required/>
                    </FormGroup>

                    <FormGroup sx={{ 
                        width:400,
                        marginLeft:40,
                        marginBottom:5,                        
                        }}>
                        <ListItemIcon>
                            <AccountBoxRoundedIcon fontSize="small" />
                        </ListItemIcon>
                        <TextField 
                            id="nic" 
                            label="NIC No" 
                            variant="standard"
                            onChange={(e) => this.onChange(e)}
                            size="medium" required/>
                    </FormGroup>

                    <FormGroup sx={{ 
                        width:400,
                        marginLeft:40,
                        marginBottom:5,                        
                        }}>
                        <ListItemIcon>
                            <ApartmentRoundedIcon fontSize="small" />
                        </ListItemIcon>
                        <InputLabel id="demo-simple-select-standard-label">Department</InputLabel>
                        <Select                            
                            variant="standard"
                            labelId="demo-simple-select-standard-label"
                            id="department"
                            value={this.state.department}
                            onChange={(e) => this.onChageSelectedDep(e)}
                            lable="Department"
                            >
                            <MenuItem value="">None</MenuItem>
                            <MenuItem value="IT">IT</MenuItem>
                            <MenuItem value="SE">SE</MenuItem>
                            <MenuItem value="CS">CS</MenuItem>
                        </Select>
                    </FormGroup>                    

                    <Button 
                        sx={{
                            width:400,
                            marginLeft:40
                        }} 
                        variant="contained" 
                        size="small"
                        onClick={this.handleClickOpen}
                        color="success" >
                        Submit
                    </Button>

                    <Dialog
                        open={this.state.open}
                        keepMounted
                        onClose={this.handleClose}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                        >
                        <DialogTitle>{"Registration Confirmation"}</DialogTitle>
                        <DialogContent>
                            <DialogContentText id="alert-dialog-title">
                                click Confirm to register the user
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <Button color="error" onClick={this.handleClose}>Cancel</Button>
                            <Button color="success" onClick={() => this.onSubmit()}>Confirm</Button>
                        </DialogActions>
                    </Dialog>
                </div>
            </>
        )
    }
}