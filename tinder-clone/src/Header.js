import React from 'react'
import "./Header.css";
import PersonIcon from '@material-ui/icons/Person';
import IconButton from '@material-ui/core/IconButton';
import ForumIcon from "@material-ui/icons/Forum";

const Header = () => {
    return (
        <div className="header">
            <IconButton>
            <PersonIcon fontSize="large" className="header_icon" />
            </IconButton>
            <img src="https://logos-world.net/wp-content/uploads/2020/09/Tinder-Emblem.png" className="header__logo" alt=""/>
            <IconButton>
            <ForumIcon fontSize="large" className="header_icon"/>
            </IconButton>    
        </div>
    )
}

export default Header;
