import React from 'react';

import Navbar from './nav-bar';
import './../../component/css/Page.css';

import FormGroup from '@mui/material/FormGroup';
import TextField from '@mui/material/TextField';
import ListItemIcon from '@mui/material/ListItemIcon';
import PermIdentityRoundedIcon from '@mui/icons-material/PermIdentityRounded';
import UploadFileRoundedIcon from '@mui/icons-material/UploadFileRounded';
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';
import IconButton from '@mui/material/IconButton';
import ApartmentRoundedIcon from '@mui/icons-material/ApartmentRounded';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

export default class AddSchema extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            fileName: "",
            asgName:"",
            asgDep:"",
            schema:null
        }
    }

    onChange = (e) => {        
        this.setState({[e.target.id]: e.target.value});
    }

    onFileChange = (e) => {
        this.setState({
            schema:e.target.files[0],
            fileName:e.target.files[0].name
        })
    }

    onChageSelected = (e) => {
        this.setState({asgDep: e.target.value});
    }

    render() {
        return (
            <>     
                <div className="AllView">
                    <Navbar/>
                    
                    <h1> Add Schema </h1>

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
                            <ApartmentRoundedIcon fontSize="small" />
                        </ListItemIcon>
                        <InputLabel id="demo-simple-select-standard-label">Department</InputLabel>
                        <Select                            
                            variant="standard"
                            labelId="demo-simple-select-standard-label"
                            id="department"
                            value={this.state.asgDep}
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
                                    id="schema" 
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
                    
                </div>
            </>
        )
    }
}