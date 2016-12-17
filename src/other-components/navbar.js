import React, {Component} from 'react';
import {Link} from 'react-router';

class componentName extends Component {
    render() {
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
                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav navbar-right">
                            <li>
                                <Link to="/signup">Registrera/Logga In</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default componentName;