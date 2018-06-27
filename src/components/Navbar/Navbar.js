import React from "react";
import "./Navbar.css";

const Navbar  = props => (
    <div className = 'sticky-nav'>
        <div className = 'sticky-jumbo'>
            <div className = 'jumbotron jumbotron-fluid'>
                <div className = 'container nav-title'>
                    <h1>Clicky Game</h1>
                    <p className="lead">Click on an image to earn points, but don't click on any more than once!</p>
                    <p className="lead"> Good Luck!</p>
                    <a className = 'navbar-Brand nav-restart' href='/'>Restart</a>
                    <div className = 'status'>High Score: {props.high}</div>
                    <div className ='status'> Current score: {props.current}</div>
                </div>
            </div>
        </div>
    </div>
);


export default Navbar ;