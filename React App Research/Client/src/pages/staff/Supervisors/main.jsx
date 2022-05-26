import React from "react";
import Navbar from './nav-bar';

export default class SupervisorMain extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (   
            <>
                 <Navbar/>

                <div className="AllView">                  
                   <h1>Supervisor Main</h1>
               </div>
            </>             
               
        );
    }
}