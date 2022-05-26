
import Navbar from './nav-bar';
import React from "react";
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import { CardMedia } from "@mui/material";
import Image1 from "./hs1.jpg";
import Image2 from "./m3.png";
import Image3 from "./m1.png";
import Image4 from "./m5.png";
import Image5 from "./m4.png";

import {/* Button,*/ Grid } from "@material-ui/core";

import { Button, CardContent, CardMedia } from "@mui/material";


function SuperMain() {
  return(

<div>   

<Navbar/>

       <Card  elevation={5} >
      
      <CardHeader
             title="SPM Reasearch"
             subheader="SLIIT Reaserch Project"
           />
            <CardContent sx={{margin:2, minHeight:400,minWidth:600}}  style={{ backgroundImage: `url(${Image1})`,   
                 backgroundSize:"cover"
               }}>
             
       
            </CardContent>
   </Card>


   <br/>
  <Grid container marginTop={9} spacing={4}>
    <Grid item xs={12} md={3}>
      
            <Card elevation={5}>
                <CardHeader 
                   title="View All"
                />

              <CardContent sx={{margin:2, minHeight:100,minWidth:100}}  style={{ backgroundImage: `url(${Image2})`,   
                      backgroundSize:"cover"
                    }}>
                 </CardContent>
            

            </Card>
      </Grid>     
   
   
      
       <Grid item xs={12} md={3}>
            <Card elevation={5}>
                <CardHeader 
                     title="Reserch Topic Information" 
                      />

           <CardContent sx={{margin:2, minHeight:10,minWidth:10}}  style={{ backgroundImage: `url(${Image3})`,   
                      backgroundSize:"cover"
                      
                    }}>

                 </CardContent>
            </Card>
       </Grid> 
     
      <Grid item xs={12} md={3} >
            <Card elevation={5}>
                <CardHeader
                 title="Document Evalution"
                 />
                        <CardContent sx={{margin:2, minHeight:100,minWidth:100}}  style={{ backgroundImage: `url(${Image4})`,   
                      backgroundSize:"cover"
                    }}>
                 </CardContent>
            </Card>
      </Grid> 

      <Grid item xs={12} md={3}>
            <Card elevation={5}>
                <CardHeader 
                     title="Total Salary Payment" 
                />
                       <CardContent sx={{margin:2, minHeight:100,minWidth:100}}  style={{ backgroundImage: `url(${Image5})`,   
                      backgroundSize:"cover"
                    }}>
                 </CardContent>
            </Card>
      </Grid> 
</Grid>


 
   



</div>
  );
}

export default SuperMain;


