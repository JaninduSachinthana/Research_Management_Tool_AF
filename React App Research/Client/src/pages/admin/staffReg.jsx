import React from 'react';
import axios from 'axios';

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
import ManRoundedIcon from '@mui/icons-material/ManRounded';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import Button from '@mui/material/Button';
import DialogTitle from '@mui/material/DialogTitle';

export default class StaffRegister extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            open:false,
            type:""
        }
    }

    onChageSelectedPos = (e) => {
        this.setState({type: e.target.value});
    }    
    
    onChange = (e) => {        
        this.setState({[e.target.id]: e.target.value});
    }

    onSubmit = async () => {
        this.handleClose();

        const staff = {
            firstName: this.state.fname,
            lastName: this.state.lname,
            email: this.state.email,
            password: this.state.password,            
            contact: this.state.contact,
            type: this.state.type
        }
        console.log(staff);

        try {
			const url = "http://localhost:8088/register/add";
			const { data: res } = await axios.post(url, staff);
            alert(res.message);
			//navigate("/login");
			console.log(res.message);

            // axios.post("http://localhost:8088/register/add", student)
            // .then((res)=> console.log(res))
            // .catch((err) => console.error(err));

		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}
		}
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
                    <h1> Staff Register </h1>

                    <FormGroup sx={{ 
                        width:400,
                        marginLeft:40,
                        marginBottom:5,                        
                        }}>
                        <ListItemIcon>
                            <AccountCircleRoundedIcon fontSize="small" />
                        </ListItemIcon>
                        <TextField 
                            id="fname" 
                            label="First Name" 
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
                            <AccountCircleRoundedIcon fontSize="small" />
                        </ListItemIcon>
                        <TextField 
                            id="lname" 
                            label="Last Name" 
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
                            label="Student Email" 
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
                            id="password" 
                            type="password"
                            label="password" 
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
                            <ManRoundedIcon fontSize="small" />
                        </ListItemIcon>
                        <InputLabel id="demo-simple-select-standard-label">Position</InputLabel>
                        <Select                            
                            variant="standard"
                            labelId="demo-simple-select-standard-label"
                            id="department"
                            value={this.state.position}
                            onChange={(e) => this.onChageSelectedPos(e)}
                            lable="Department"
                            >
                            <MenuItem value="Panel Member">Panel Member</MenuItem>
                            <MenuItem value="Supervisor">Supervisor</MenuItem>
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