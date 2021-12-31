import React from 'react';
import Box from '@mui/material/Box';
import {Typography} from "@mui/material";
import './Footer.css';

/* Typical footer component */
const Footer = () => {
    return (
        <footer >
            <Box className="footer-box" textAlign="center" >
                <Typography variant="subtitle1">
                    Timothy Barrett &copy; {new Date().getFullYear()}
                </Typography>
            </Box>
        </footer>
    )
}

export default Footer;