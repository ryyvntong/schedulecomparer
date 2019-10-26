import React from 'react';
import classes from'./toolbar.module.css'
import Logo from '../../logo/logo'
import NavigationItems from '../navigationItems/navigationItems'
const toolbar=(props)=>{
    return(
        <header className={classes.Toolbar}>
            <button class="btn btn-default" onClick={props.toggle} className={classes.MobileOnly}><i class="fas fa-hamburger"></i>  MENU</button>
            <div className={classes.Logo}>
            <Logo></Logo>
            </div>
            <nav className={classes.DesktopOnly}>
                <NavigationItems/>
            </nav>
        </header>
    )
};

export default toolbar;