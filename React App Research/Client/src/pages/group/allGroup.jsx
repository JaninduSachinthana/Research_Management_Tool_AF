import React, { Component } from 'react'
import axios from "axios";

import SmallView from "./Groupsmaller"

//import "./../../component/css/AllGroup.css"

const isBackgroundRed = true;
class AllForUser extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
           user: []
        }
    };
    
    // Get all packages from datasbase
    componentDidMount() {
        axios.get("http://localhost:8088/group/viewgroup").then(res => {
            this.setState({user: res.data });
        }).catch(err => {
            console.log(err);
        });
    }

    render() {
        <div
      style={{
        backgroundColor: isBackgroundRed ? 'red' : 'blue',
      }}
    />
        return (
            <div>
            <h1>....RESEARCH GROUP DETAILS.....</h1>
    <hr/>
            <div className="container">
     
      
      <br/>
      <hr />
      <br/>
      <br/>

                    
                    <React.Fragment>
                   
                        {
                            this.state.user.map(user => {
                                return <SmallView user={user} count={3} />
                            })
                        }
                    </React.Fragment><br/>
                    <br/>
                    <br/>
               
                <br/>
                <br/>
                </div>
            </div>


        );
    }
}

export default AllForUser;