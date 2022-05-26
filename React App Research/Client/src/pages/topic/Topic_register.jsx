import React, { useState } from "react";
import axios from "axios";
import './Topic.css'
import Navbar from '../student/nav-bar';
import Image from '../../component/images/1.jpg';
import { Container } from "@mui/material";

function TopicRegister() {

  const[values, setValues] = useState({
    stdID:"",
    grpID:"",
    title:"",
    email:""
  });

  const handleAddData = (e) => {
    const { name, value } = e.target
    setValues({ ...values, [name]: value});
  }  

  const addTopic = (e) => {
    e.preventDefault();
    let topicdata = {
      stdID: values.stdID,
      grpID: values.grpID,
      title: values.title,
      email: values.email
    }

    console.log(topicdata);
           
    axios.post("http://localhost:8088/topicreg/add", topicdata )
    .then((res) => 
      alert(res.data)
    )
    
    .catch((error) => {
      console.log(error);
    })

  }



    return(
        <div>
         
            

<Navbar/>

<div className="topic_page">
<div class="form-container-topic">
        
        <form class="topic-form-title">
        <h2 class="topic-title">Research Topic Submission</h2>
         
        <label className='lbl-topic'>Student ID</label>
          <input
            class="form-field-topic"
            type="text"
            placeholder="Student ID"
            name="stdID"
            onChange={handleAddData}
            value={values.stdID}
          />

           <label className='lbl-topic'>Group ID</label>
          <input
            class="form-field-topic"
            type="text"
            placeholder="Group ID"
            name="grpID"
            onChange={handleAddData}
            value={values.grpID}
          />
         

       <label className='lbl-topic'>Title</label>
          <input
            class="form-field-topic"
            type="text"
            placeholder="Title"
            name="title"
            onChange={handleAddData}
            value={values.title}
          />

        <label className='lbl-topic'>Email</label>
          <input
            class="form-field-topic"
            type="Email"
            placeholder="****@gmail.com"
            name="email"
            onChange={handleAddData}
            value={values.email}
          />



          <div className="btngroup-topic">  
             
              <button className="form-field cancel-topic" onclick="document.getElementById('myInput').value = ''">
                 Clear
              </button>
            
            
              <button class="form-field submit-topic" onClick={addTopic}  type="submit"> 
                    Submit
             </button>
               
          </div>
        </form>
      </div>
     
      </div>
        </div>

      
    )
}

export default TopicRegister;