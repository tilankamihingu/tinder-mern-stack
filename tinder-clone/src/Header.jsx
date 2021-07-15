import React from 'react';
import './Header.css';
import PersonIcon from '@material-ui/icons/Person';
import IconButton from '@material-ui/core/IconButton';
import ForumIcon from '@material-ui/icons/Forum';

function Header() {
    return (
        <div className="header">
            <IconButton>
                <PersonIcon font-size="large" className="header__icon" />
            </IconButton>
            <img src="https://1000logos.net/wp-content/uploads/2018/07/Tinder-logo-700x394.png" className="header__logo" alt="" />
            <IconButton>
                <ForumIcon font-size="large" className="header__icon" />
            </IconButton>
        </div>
    )
}

export default Header
