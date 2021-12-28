import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AboutDialog from "./AboutDialog";
import ContactDialog from "./ContactDialog";

const NavBar = () => {
    const [ openAbout, setOpenAbout ] = useState(false);
    const [ openContact, setOpenContact ] = useState(false);

    const handleClickOpenAbout = () => {
        setOpenAbout(true);
    };
    const handleCloseAbout = (value) => {
        setOpenAbout(false);
    };

    const handleClickOpenContact = () => {
        setOpenContact(true);
    };
    const handleCloseContact = (value) => {
        setOpenContact(false);
    };

    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Caloric Expenditure Calculator
                        </Typography>
                        <Button color="inherit" onClick={handleClickOpenAbout}>About</Button>
                        <Button color="inherit" onClick={handleClickOpenContact}>Contact</Button>
                    </Toolbar>
                </AppBar>
            </Box>
            <AboutDialog open={openAbout} onClose={handleCloseAbout}/>
            <ContactDialog open={openContact} onClose={handleCloseContact}/>
        </div>

    );
}

export default NavBar;