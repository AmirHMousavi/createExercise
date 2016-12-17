import React, {Component} from 'react';
import {Link} from 'react-router';

class componentName extends Component {
    render() {
        const gustLinks = (
            <ul className="nav navbar-nav navbar-right">
                <li>
                    <Link to="/signup">Registrera</Link>
                </li>
                <li>
                    <Link to="/login">Logga In</Link>
                </li>
            </ul>
        );
        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <Link to="/" className="navbar-brand">
                            <b>Lära Svenska</b>
                        </Link>
                    </div>
                    <ul className="nav navbar-nav navbar-left">
                        <li>
                            <Link to="/overview">Exercises Overview</Link>
                        </li>
                    </ul>
                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">{gustLinks}</div>
                </div>
            </nav>
        );
    }
}

export default componentName;