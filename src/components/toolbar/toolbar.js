import React from 'react';
import classes from'./toolbar.module.css'
import NavItems from './navItems/navItems'
//Add routing to the links
const toolbar=(props)=>{
    return(
<header className={classes.Toolbar}>
    <nav class="navbar navbar-expand-lg navbar-light" >
        <NavItems/>
    </nav>
</header>
    )
};

export default toolbar;