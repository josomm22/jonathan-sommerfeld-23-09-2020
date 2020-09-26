import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button, Switch } from 'antd';
import day from '../../assets/icons/day.svg'
import night from '../../assets/icons/night.svg'

export default function Header({toggleTheme, theme}) {

    const switchIcon = icon => {
        return <img src={icon}/>
    }

    return (
        <div className={`header-container ${theme}`}>
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
                <Switch checkedChildren="Light"
                    unCheckedChildren="Dark"
                    onChange={toggleTheme}
                    checked={theme === 'light'}
                     />
                {/* <img src={day}/> */}
            </div>

        </div>
    )
};