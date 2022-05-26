import React from "react";

import Navbar from './nav-bar';
import './../../component/css/Page.css';
import React from "react";
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import { CardMedia } from "@mui/material";
// import CardMedia from '@material-ui/core/CardMedia';
import './studentslide.css';
// import CardActions from '@material-ui/core/CardActions';
import {/* Button,*/ Grid } from "@material-ui/core";
import './student.css';
import { Button, CardContent, CardMedia } from "@mui/material";
import image from "../../component/images/s3.jpg";
import Image1 from "./hs1.jpg";

function StudentMain() {
  return(

<div className="page">   

 <Navbar/>

         <Card  elevation={5} >
           <CardHeader
                  title="SPM Reasearch"
                  subheader="SLIIT Reaserch Project"
                />
                 <CardContent sx={{margin:2, minHeight:400,minWidth:600}}  style={{ backgroundImage: `url(${Image1})`,   
                      backgroundSize:"cover"
                    }}>
                  
                  {/* <Button sx={{marginLeft:50,marginTop:15}} variant="outlined" color="error" size="large">
                      Error
                   </Button> */}
                 </CardContent>
        </Card>


      {/* <Grid item md={6}>
      
            <Card elevation={5}  height={140}>
                 <CardHeader
                     title=""                
                 />
                
            </Card>
        </Grid>  */}
  



  <Grid container marginTop={9} spacing={4}>
    <Grid item xs={12} md={3}>
      
            <Card elevation={5}>
                <CardHeader 
                   title="Research Submission"
                />

              <CardContent sx={{margin:2, minHeight:100,minWidth:100}}  style={{ backgroundImage: `url(${Image1})`,   
                      backgroundSize:"cover"
                    }}>
                  
                  {/* <Button sx={{marginLeft:50,marginTop:15}} variant="outlined" color="error" size="large">
        Error
      </Button> */}
                 </CardContent>

            </Card>
      </Grid>     
   
   
      
       <Grid item xs={12} md={3}>
            <Card elevation={5}>
                <CardHeader 
                     title="Total Income"
                     subheader="Three Month"
                      />
            </Card>
       </Grid> 
     
      <Grid item xs={12} md={3} >
            <Card elevation={5}>
                <CardHeader
                 title="Total Payment"
                 subheader="Three Month  "
                 />
            </Card>
      </Grid> 

      <Grid item xs={12} md={3}>
            <Card elevation={5}>
                <CardHeader 
                     title="Total Salary Payment"
                     subheader="Three Month  "
                />
            </Card>
      </Grid> 
</Grid>


 
   


   
</div>
  );
}

export default StudentMain;

