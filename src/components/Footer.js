import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import {Typography} from "@mui/material";
import './Footer.css';


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