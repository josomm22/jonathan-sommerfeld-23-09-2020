import React, { useState, useEffect, useCallback } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Button } from 'antd';

export default function Header(props) {

    return (
        <div className="header-container">
            <div className="header-menu">
                <div className="menu-container">
                    <NavLink to="/home" activeClassName="selected">
                        <Button >Home</Button>
                    </NavLink>
                    <NavLink to="/favourites" activeClassName="selected">
                        <Button >Favourites</Button>
                    </NavLink>



                </div>
            </div>
            <div className="header-title">Jonathan's Weather App</div>
            <div className="header-modetoggle">

            </div>

        </div>
    )
};