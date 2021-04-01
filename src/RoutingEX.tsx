import React from 'react';
import { MyProperties } from './components/property/MyProperties';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Analytics from './components/analytics/Analytics';

function RoutingEx(){
    return (
        <div className='wrapper d-flex align-items-stretch'>
            <nav id="sidebar">
                <div className="custom-menu">
                    <button type="button" id="sidebarCollapse" className="btn btn-primary">
                        <i className="fa fa-bars"></i>
                        <span className="sr-only">Toggle Menu</span>
                    </button>
                </div>
                <h1><a href="index.html" className="logo">pulse</a></h1>
                <ul id="menuPanel" className="list-unstyled components mb-5">
                    <li className="active">
                        {/* <a><span className="fa fa-home mr-1"></span> properties</a> */}
                        <Link to='/' ><span className="fa fa-home mr-1"></span>properties</Link>
                    </li>
                    <li>
                        <Link to='/Analytics' ><span className="fa fa-user mr-1"></span>analytics</Link>
                    </li>
                    <li>
                        <a href="#"><span className="fa fa-sticky-note mr-1"></span> metrics</a>
                    </li>
                    <li>
                        <a href="#"><span className="fa fa-sticky-note mr-1"></span> forms</a>
                    </li>
                    <li>
                        <a className="collapsed arrow" data-toggle="collapse" href="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                        <span className="fa fa-sticky-note mr-1"></span>tenant tracker
                        </a>
                        <div id="collapseOne" className="panel-collapse collapse" role="tabpanel">
                            <div>
                                <ul>
                                    <li><a href="#">News</a></li>
                                    <li><a href="#">Sport</a></li>
                                    <li><a href="#">Health</a></li>
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li>
                        <a className="collapsed arrow" data-toggle="collapse" href="#collapse2" aria-expanded="false" aria-controls="collapseOne">
                        <span className="fa fa-sticky-note mr-1"></span>admin
                        </a>
                        <div id="collapse2" className="panel-collapse collapse" role="tabpanel" >
                            <div>
                                <ul>
                                    <li><a href="#">News</a></li>
                                    <li><a href="#">Sport</a></li>
                                    <li><a href="#">Health</a></li>
                                </ul>
                            </div>
                        </div>
                    </li>
                </ul>
             
            </nav>
        </div>
    )
}

export default RoutingEx
