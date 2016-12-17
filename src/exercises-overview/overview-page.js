import React, {Component} from 'react';
import {Link} from 'react-router';
import OverviewList from './overview-list';

class OverviewPage extends Component {

    render() {
        return (
            <div>
                <h1>Översikt Övningar</h1>
                <div className="row row-content">
                    <div className="col-sm-12">
                        <div className="col-sm-4">
                            <div className="input-group">
                                <span className="input-group-btn">
                                    <button className="btn btn-default" type="button">
                                        <span className="glyphicon glyphicon-search"></span>
                                    </button>
                                </span>
                                <input type="text" className="form-control" placeholder="Search for..."/>
                            </div>
                        </div>
                        <div className="col-sm-1 col-sm-offset-6">
                            <div className="dropdown">
                                <button
                                    className="btn btn-success dropdown-toggle"
                                    type="button"
                                    id="dropdownMenu1"
                                    data-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="true">
                                    Ny uppgift
                                    <span
                                        className="caret"
                                        style={{
                                        margin: 5 + 'px'
                                    }}></span>
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                                    <li>
                                        <Link to="uppgift/-1">Ny Ordklassar</Link>
                                    </li>
                                    <li className="disabled">
                                        <a href="#">another type1</a>
                                    </li>
                                    <li className="disabled">
                                        <a href="#">another type 2</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <hr/>
                <OverviewList/>
            </div>
        );
    }
}

export default OverviewPage;