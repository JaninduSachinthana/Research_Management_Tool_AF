import React from 'react'
import { useHistory } from "react-router-dom";
// import {  FaStar } from 'react-icons/fa';

const PackageSmallView = (props) => {

    const user = props.user;
    const count = props.count;

    const history = useHistory();
    const handleClick = (path) => {
        history.push(path);
    }

    return (
        // <div className={`col-xs-12 col-sm-6 col-md-${count}`}>
            
        //     <div class="card">
        //         <img src={user.imageURL} class="card-img-top" alt={user.empNumber} />
        //         <div class="card-body">
        //             <h5 class="card-title text-center">{user.groupid}</h5>
        //             <h6 class="card-title">Group ID: {user.department}</h6>
        //             <p class="card-text">Leader:{user.memberLeader}</p> 
        //         <div class="card-footer">
        //                 <div class="row text-center">
        //                     <div className="">
        //                         <button onClick={() => handleClick(`/user/${user._id}`)} type="button" class="btn btn-outline-primary">View</button>
                                
        //                     </div>    
        //                 </div>
                        
        //             </div>
        //         </div>
        //     </div>
        // </div>'
 <div class="container">
  <div class="card">
    <div class="box">
      <div class="content">  
     <h1>Research Group</h1>
     <br/> <button type="button" class="btn btn-default btn-circle btn-lg">
     <h1>{user.groupid}</h1>
                            </button>
   
    <br/>
      <h3>Department: {user.department}</h3>
       <h3>Leader : {user.memberLeader}</h3> 
        <a href="#">Read More</a>
      </div>
    </div>
  </div>
  </div>
    );
}

export default PackageSmallView;


