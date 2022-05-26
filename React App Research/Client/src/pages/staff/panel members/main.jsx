import React from "react";
import Navbar from './nav-bar';

import './../../../component/css/Page.css';

export default class PanelMain extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (    
            
            <>
                <Navbar/>        
               <div className="AllView">                   
                        
                    <h1>Panel Main</h1>

               </div>
            </>
                
        );
    }
}