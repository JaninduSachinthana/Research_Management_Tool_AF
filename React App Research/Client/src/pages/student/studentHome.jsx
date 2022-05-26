import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Navbar from './nav-bar';

import './../../component/css/Page.css';

export default class StudentMain extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (   
            <>
                <Navbar/>

                <div className="AllView">
                  
                  <h1>Student</h1>
                </div>

            </>          
               
        );
    }
}