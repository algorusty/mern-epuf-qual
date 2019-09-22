import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
    render() {
        return (
            <nav className="Navbar navbar-dark bg-dark navbar-expand-lg">
                <Link to="/" className="navbar-brand">ePUF</Link>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="navbar-item">
                            <Link to="/" className="nav-link">ePUFs</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/create" className="nav-link">Add data to ePUF registry</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/epufID" className="nav-link">Create new ePUF registry</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}