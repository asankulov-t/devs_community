import React from 'react';
import {NavLink} from "react-router-dom";
import  styles from './NavSide.module.css'
import Col from "react-bootstrap/Col";
const NavSide = () => {
    return (
        <Col xs={3} lg={3}>
            <ul className={styles.navList}>
                <li><NavLink to={'/Podcasts'}>Podcasts</NavLink></li>
                <li><NavLink to={'/Videos'}>Videos</NavLink></li>
                <li><NavLink to={'/Users'}>Users</NavLink></li>
                <li><NavLink to={'/sign_in'}>Sign in</NavLink></li>
            </ul>
        </Col>

    );
};

export default NavSide;