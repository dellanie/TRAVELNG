import { Button } from '@material-ui/core';
import React from 'react';
import './header.css';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { useHistory } from 'react-router-dom';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';

function Header() {
    const history = useHistory();
    return (
        <div className='header'>
            <div className="header-left">
                <Link to="/">
                <h2>TOUR-NG</h2>
                </Link>
            </div>
            <div className="header-right">
                <Button onClick={() => history.push("/")} className="buttonhome" className="buttonheader">
                    Home
                </Button>
                <Button onClick={() => history.push("/explore")} className="buttonheader">
                    Explore
                    
                </Button>
                <Button className="buttonheader">
                    About Us
                </Button>
                <Button className="buttonheader">
                    Contact Us
                </Button>
                <PopupState variant="popover" popupId="demo-popup-menu" >
                    {(popupState) => (
                        <React.Fragment>
                        <Button  {...bindTrigger(popupState)} className="popup">

                            <MenuIcon/>    
                        </Button>
                        <Menu {...bindMenu(popupState)}>
                            <MenuItem onClick={popupState.close} onClick={() => history.push("/")}>Home</MenuItem>
                            <MenuItem onClick={popupState.close} onClick={() => history.push("/explore")} >Explore</MenuItem>
                            <MenuItem onClick={popupState.close}>About Us</MenuItem>
                            <MenuItem onClick={popupState.close}>Contact</MenuItem>
                        </Menu>
                        </React.Fragment>
                    )}
                </PopupState>

                
            </div>
        </div>
    )
}

export default Header
