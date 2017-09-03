import React, {Component} from 'react';
import { Link } from 'react-router';
import { login, logout, isLoggedIn } from '../utils/AuthService';
import '../App.css';

function Nav(props) {
    return (
        <nav className="navbar navbar-default">
            <div className="navbar-header">
                <Link className="navbar-brand" to="/">MiniYoutube</Link>
            </div>
            <ul className="nav navbar-nav">
                <li>
                    <Link to="/">All Videos</Link>
                </li>
                <li>
                    {
                        (isLoggedIn()) 
                            ? (<button className="btn btn-danger log" onClick={()=>logout()}>Log Out</button>)
                            : (<button className="btn btn-primary log" onClick={()=>login()}>Log In</button>)
                    }
                </li>
            </ul>
        </nav>
    );
}

export default Nav;
