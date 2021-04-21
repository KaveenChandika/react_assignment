import React, { Component } from 'react'
import './Header.css';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MenuIcon from '@material-ui/icons/Menu';

class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="header_left">
                    <h2>Simplifya</h2>
                </div>
                <div className="header_right">
                    <NotificationsIcon />
                    <h3>Menu</h3>
                    <MenuIcon />
                </div>
            </div>
        )
    }
}

export default Header;
