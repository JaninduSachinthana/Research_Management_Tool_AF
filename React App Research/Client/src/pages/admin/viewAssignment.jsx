import React from 'react';
import axios from 'axios';

import Navbar from './nav-bar';
import './../../component/css/Page.css';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Grid from '@mui/material/Grid';
import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import Stack from '@mui/material/Stack';
import ModeEditOutlinedIcon from '@mui/icons-material/ModeEditOutlined';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FormGroup from '@mui/material/FormGroup';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import PermIdentityRoundedIcon from '@mui/icons-material/PermIdentityRounded';
import ApartmentRoundedIcon from '@mui/icons-material/ApartmentRounded';
import UploadFileRoundedIcon from '@mui/icons-material/UploadFileRounded';
import Input from '@mui/material/Input';
import IconButton from '@mui/material/IconButton';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ListItemText from '@mui/material/ListItemText';
import AssignmentRoundedIcon from '@mui/icons-material/AssignmentRounded';

export default class ViewAssignment extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            Assignment:[],
            edit: false,
            asgName:"",
            endDate:"",
            endTime:"",
            template:"",
            department:"",
            fileName:"",
            id:"",
            message:"",
            type:"",
            open:false,
            viewSub: false,
            researches:[],
            url:""
        }
    }

    componentDidMount() {
        axios.get("http://localhost:8088/assignment/view")
        .then((res)=> {this.setState({
            Assignment : res.data
        }); console.log(res.data)}  )
        .catch((err) => console.error(err));
    }

    signModalOpen = () => {    
        this.setState({
            edit: true
        })
        
    };
    
    signModalClose = () => {
        this.setState({
            edit: false
        })
    };

    onEditClick = async (id) => {
        this.signModalOpen();

        await axios.get(`http://localhost:8088/assignment/view/${id}`)
        .then((res)=>{this.setState({
            id: res.data._id,
            asgName:res.data.asgName,
            endDate:res.data.endDate,
            endTime:res.data.endTime,
            template:res.data.template,
            department:res.data.department,
            fileName:res.data.fileName
        }); console.log(res.data)} )
        .catch((err) => console.error(err));
    }

    onUpdate = async () => {

        let formData = new FormData();
        formData.append("asgName", this.state.asgName);
        formData.append("endDate", this.state.endDate);
        formData.append("endTime", this.state.endTime);
        formData.append("department", this.state.department);
        formData.append("template", this.state.template);
        formData.append("fileName", this.state.fileName);
        
        console.log(this.state.id);

        await axios.put(`http://localhost:8088/assignment/edit/${this.state.id}`, formData)
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

    onFileChange = (e) => {
        this.setState({
            template:e.target.files[0],
            fileName:e.target.files[0].name
        })
    }

    onChange = (e) => {        
        this.setState({[e.target.id]: e.target.value});
    }

    onChageSelected = (e) => {
        this.setState({department: e.target.value});
    }

    onDelete = async (id) => {
        console.log(id);
        await axios.delete(`http://localhost:8088/assignment/delete/${id}`)
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

    viewSubOpen = () => {    
        this.setState({
            viewSub: true
        })
        
    };
    
    viewSubClose = () => {
        this.setState({
            viewSub: false
        })
    };

    onViewSubmission = async (id) => {
        this.viewSubOpen();

        console.log(id);
        await axios.get(`http://localhost:8088/research/view/${id}`)
        .then((res) => {this.setState({
            researches : res.data
        }); console.log(res.data)})
        .catch((err) => console.error(err.message))
    }

    onDownload = async  (id) => {
        await axios.get(`http://localhost:8088/research/download/${id}`)
        .then((res) => {this.setState({
            url : res.data
        }); console.log(res.data)})
        .catch((err) => console.error(err.message))
        .finally(() => {window.location = `${this.state.url}`})
    }

    render() {
        return (
            <>
                <Navbar/>

                <div className="AllView">
                    <h1> View Assignment </h1>

                    {this.state.Assignment.map((item) => (

                        <Accordion sx={{
                            marginTop:"20px",
                            backgroundColor: "lightgray"
                            }}>
                            <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            >
                            <Typography>{item.asgName}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                            <Typography>
                            <Grid container spacing={3}>
                                <Grid item xs={2}>
                                    Department : {item.department}
                                </Grid>
                                <Grid item xs={3}>
                                    End Date: {item.endDate}
                                </Grid>
                                <Grid item xs={3}>
                                    End Time: {item.endTime}
                                </Grid>
                                    <ListItemButton
                                        component="a" 
                                        href={`${item.template}`}
                                        sx={{ 
                                            marginTop:"10px"
                                        }} >
                                        <ListItemIcon>
                                            <DownloadOutlinedIcon 
                                                fontSize="large"
                                                color="primary" />
                                        </ListItemIcon>
                                        <ListItemText primary="Download Template" />
                                    </ListItemButton>                                   
                            </Grid>
                            </Typography>
                            <Stack 
                                direction="row" 
                                spacing={2}
                                sx={{ 
                                    marginTop:"10px"
                                }} >
                                <Button 
                                    variant="contained" 
                                    startIcon={<ModeEditOutlinedIcon />}
                                    color="warning"
                                    onClick={() => this.onEditClick(item._id)}
                                    sx={{ 
                                        marginRight:"100px"
                                    }} >
                                    Edit
                                </Button>
                                <Button 
                                    variant="contained" 
                                    endIcon={<DeleteIcon />}
                                    onClick={() => this.onDelete(item._id)}                                    
                                    color="error"
                                    sx={{ 
                                        marginRight:"100px"
                                    }}  >
                                    Remove
                                </Button>
                                <Button 
                                    variant="contained" 
                                    startIcon={<AssignmentRoundedIcon />}
                                    color="primary"
                                    onClick={() => this.onViewSubmission(item._id)}
                                    sx={{ 
                                        marginLeft:"200px"
                                    }} >
                                    View Submissions
                                </Button>
                            </Stack>
                            </AccordionDetails>
                        </Accordion>

                    ))}

                    <Modal
                        open={this.state.edit}
                        onClose={this.signModalClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                        >
                        <Box sx={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            width: 400,
                            bgcolor: 'background.paper',
                            border: '2px solid #000',
                            boxShadow: 24,
                            p: 4
                        }}>
                        <Typography 
                            id="modal-modal-title" 
                            variant="h6" 
                            component="h2"
                            sx={{ 
                                marginLeft:"100px",
                                color:"blue",
                                fontSize:"25px",
                                fontWeight:"bold",
                             }}>
                            Edit Assignment
                        </Typography>

                            <div>                            
                                
                         <FormGroup>
                         <ListItem  disablePadding>
                        <ListItemIcon>
                            <PermIdentityRoundedIcon fontSize="large" />
                        </ListItemIcon>
                        <TextField 
                            fullWidth
                            id="asgName" 
                            //label="Assignment Name" 
                            variant="filled"
                            defaultValue={this.state.asgName}
                            onChange={(e) => this.onChange(e)}
                            size="medium" required/>
                        </ListItem>
                    </FormGroup>    <br/> 

                    <FormGroup>
                        <ListItem  disablePadding>
                        <ListItemIcon>
                            <AccessTimeIcon fontSize="large" />
                        </ListItemIcon>
                        <TextField 
                            fullWidth
                            type="date"
                            id="endDate" 
                            //label="" 
                            variant="filled"
                            defaultValue={this.state.endDate}
                            onChange={(e) => this.onChange(e)}
                            size="medium" required/>
                        </ListItem>
                    </FormGroup>    <br/> 

                    <FormGroup>
                    <ListItem  disablePadding>
                        <ListItemIcon>
                            <PermIdentityRoundedIcon fontSize="large" />
                        </ListItemIcon>
                        <TextField 
                            fullWidth
                            type="time"
                            id="endTime" 
                            //label="" 
                            variant="filled"
                            defaultValue={this.state.endTime}
                            onChange={(e) => this.onChange(e)}
                            size="medium" required/>
                        </ListItem>
                    </FormGroup>      <br/>                

                    <FormGroup>
                        <ListItem  disablePadding>
                        <ListItemIcon>
                            <ApartmentRoundedIcon fontSize="large" />
                        </ListItemIcon>
                        <InputLabel id="demo-simple-select-standard-label"></InputLabel>
                        <Select  
                            fullWidth                          
                            variant="filled"
                            labelId="demo-simple-select-standard-label"
                            id="department"
                            //placeholder={this.state.department}
                            defaultValue={this.state.department}
                            onChange={(e) => this.onChageSelected(e)}
                            //lable="Department"
                            >
                            <MenuItem value="">None</MenuItem>
                            <MenuItem value="IT">IT</MenuItem>
                            <MenuItem value="SE">SE</MenuItem>
                            <MenuItem value="CS">CS</MenuItem>
                        </Select>
                        </ListItem>
                    </FormGroup>  <br/> 

                    <FormGroup>
                    <ListItem  disablePadding>
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
                            </ListItem>
                            </FormGroup>  <br/> 

                                <Button 
                                    fullWidth
                                    onClick={this.onUpdate}
                                    variant="contained" 
                                    color="warning">
                                    Update
                                </Button>
                                
                            </div>
                            
                            </Box>
                        </Modal>

                        <Modal 
                            open={this.state.viewSub}
                            onClose={this.viewSubClose}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description">

                            <Box sx={{
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                width: 900,
                                bgcolor: 'background.paper',
                                border: '5px solid black',
                                boxShadow: 24,
                                backgroundColor:"lightgray",
                                p: 4
                            }}>
                                <TableContainer component={Paper}>
                                    <Table size="small" sx={{ minWidth: 700, border: '2px solid black', }} aria-label="customized table">
                                        <TableHead>
                                        <TableRow sx={{backgroundColor:"gray", height:"10px"}}>
                                            <TableCell align="center" sx={{fontSize:"20px", fontWeight:"bold"}}>Assignment Name </TableCell>
                                            <TableCell align="center" sx={{fontSize:"20px", fontWeight:"bold"}}>Student ID</TableCell>
                                            <TableCell align="center" sx={{fontSize:"20px", fontWeight:"bold"}}>Group ID</TableCell>
                                            <TableCell align="center" sx={{fontSize:"20px", fontWeight:"bold"}}>Download Research</TableCell>
                                        </TableRow>
                                        </TableHead>
                                        <TableBody>
                                        {this.state.researches.map((item) => (
                                            <TableRow hover={true} sx={{height:"10px"}}>
                                            <TableCell align="center" sx={{fontSize:"20px"}}> {item.asgName} </TableCell>
                                            <TableCell align="center" sx={{fontSize:"20px"}}> {item.stdID} </TableCell>
                                            <TableCell align="center" sx={{fontSize:"20px"}}> {item.grpID} </TableCell>
                                            <TableCell align="center">
                                                <ListItemButton
                                                    onClick={() => this.onDownload(item._id)}
                                                    sx={{ 
                                                        marginTop:"10px"
                                                    }} >
                                                    <ListItemIcon>
                                                        <DownloadOutlinedIcon 
                                                            fontSize="large"
                                                            color="primary" />
                                                    </ListItemIcon>
                                                    <ListItemText primary="Download" />
                                                </ListItemButton>  
                                            </TableCell>
                                            </TableRow>
                                        ))}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                                
                            </Box>
                        </Modal>

                        <Snackbar open={this.state.open} autoHideDuration={2000} onClose={this.handleClose}>
                        <Alert onClose={this.handleClose} severity={this.state.type} sx={{ width: '100%' }}>
                            {this.state.message}
                        </Alert>
                    </Snackbar>
                </div>
            </>
        )
    }
}