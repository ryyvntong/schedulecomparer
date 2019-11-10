
import React from 'react';
// import classes from './navigationItems.module.css'


const navigationItems=(props)=>{
    return(
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
            <li class="nav-item active"><a class="navbar-brand" href="#"><i class="fas fa-calendar-alt" style={{marginRight: "5px"}}></i>ScheduleComparer</a></li>
            <li class="nav item"></li>
        </ul>

    );
}

export default navigationItems;
