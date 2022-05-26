import React from 'react';
import axios from 'axios';

import Navbar from './nav-bar';
import './../../component/css/Page.css';

import FormGroup from '@mui/material/FormGroup';
import TextField from '@mui/material/TextField';
import ListItemIcon from '@mui/material/ListItemIcon';
import PermIdentityRoundedIcon from '@mui/icons-material/PermIdentityRounded';
import UploadFileRoundedIcon from '@mui/icons-material/UploadFileRounded';
import Input from '@mui/material/Input';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import ApartmentRoundedIcon from '@mui/icons-material/ApartmentRounded';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

export default class AddAssignment extends React.Component{

    constructor(props) {
        super(props);
        
        this.state = {            
            asgName:"",
            endDate:"",
            endTime:"",
            template:"",
            department:"",
            fileName:"Insert File",
            message:"",
            type:"",
            open:false
        }
    }
    
    onChange = (e) => {        
        this.setState({[e.target.id]: e.target.value});
    }

    onFileChange = (e) => {
        this.setState({
            template:e.target.files[0],
            fileName:e.target.files[0].name
        })
    }

    onChageSelected = (e) => {
        this.setState({department: e.target.value});
    }

    onSubmit = async (e) => {
        e.preventDefault();

        let formData = new FormData();
        formData.append("asgName", this.state.asgName);
        formData.append("endDate", this.state.endDate);
        formData.append("endTime", this.state.endTime);
        formData.append("department", this.state.department);
        formData.append("template", this.state.template);
        formData.append("fileName", this.state.fileName);

        await axios.post("http://localhost:8088/assignment/add", formData)
        .then((res)=> this.setState({
            message: res.data,
            type:"success",
            open: true
        }))
        .catch((err) => this.setState({
            message: err.message,
            type:"error",
            open: true
        }))
        .finally(() => window.location = '/Admin/ViewAssignment');
    }

    handleClose = () => {
        this.setState({
            open: false
        })
    }

    render() {
        return (
            <>
                <Navbar />

                <div className="AllView">
                    <h1> Add Assignment </h1>

                    <FormGroup sx={{ 
                        width:400,
                        marginLeft:40,
                        marginBottom:5,                        
                        }}>
                        <ListItemIcon>
                            <PermIdentityRoundedIcon fontSize="small" />
                        </ListItemIcon>
                        <TextField 
                            id="asgName" 
                            label="Assignment Name" 
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
                            <PermIdentityRoundedIcon fontSize="small" />
                        </ListItemIcon>
                        <TextField 
                            type="date"
                            id="endDate" 
                            label="" 
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
                            <AccessTimeIcon fontSize="small" />
                        </ListItemIcon>
                        <TextField 
                            type="time"
                            id="endTime" 
                            label="" 
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
                            onChange={(e) => this.onChageSelected(e)}
                            lable="Department"
                            >
                            <MenuItem value="">None</MenuItem>
                            <MenuItem value="IT">IT</MenuItem>
                            <MenuItem value="SE">SE</MenuItem>
                            <MenuItem value="CS">CS</MenuItem>
                        </Select>
                    </FormGroup>

                    <FormGroup sx={{ 
                        width:400,
                        marginLeft:40,
                        marginBottom:5
                        }}>
                            <label htmlFor="icon-button-file">
                                <IconButton 
                                    color="primary"
                                    id="file" 
                                    aria-label="upload picture"
                                    component="span">
                                    <UploadFileRoundedIcon />                                                                  
                                </IconButton>
                                    {this.state.fileName} 
                                <Input 
                                    sx={{
                                        display: 'none',
                                    }}
                                    id="icon-button-file"                                    
                                    onChange={(e) => this.onFileChange(e)}                                    
                                    type="file" />                                
                            </label>
                        </FormGroup>

                    <Button 
                        sx={{
                            width:400,
                            marginLeft:40
                        }} 
                        variant="contained" 
                        size="small"
                        onClick={(e) => this.onSubmit(e)}
                        color="success" >
                        Submit
                    </Button>

                    <Snackbar open={this.state.open} autoHideDuration={3000} onClose={this.handleClose}>
                        <Alert onClose={this.handleClose} severity={this.state.type} sx={{ width: '100%' }}>
                            {this.state.message}
                        </Alert>
                    </Snackbar>

                </div>
            </>
        )
    }
}