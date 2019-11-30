
import React from 'react';
import classes from './navItems.module.css';
import cx from 'classnames'
import {Link} from 'react-router-dom'


const navigationItems=(props)=>{
    return(
    <React.Fragment>
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
            <li class="nav-item active"><a class="navbar-brand Brand" href="#"><i class="fas fa-calendar-alt" style={{marginRight:"5px"}}></i>ScheduleComparer</a></li>
            <Link to="/compare"><li class="nav-item active"><a class="nav-link" href="#">Upload</a></li></Link>
        </ul>
        <ul class="navbar-nav mt-2 mt-lg-0">
            <li class="nav-item active"><a class="NavItem"  href="#"><i class="fas fa-user-plus" style={{marginRight:"5px"}} ></i>Sign Up</a></li>
            <li class="nav-item active"><a class="nav-link" href="#"><i class="fas fa-sign-in-alt" style={{marginRight:"5px"}}></i>Login</a></li>
        </ul>
    </React.Fragment>

    );
}

export default navigationItems;
