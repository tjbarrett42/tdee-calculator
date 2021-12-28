import React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import PersonIcon from '@mui/icons-material/Person';
import AddIcon from '@mui/icons-material/Add';
import Typography from '@mui/material/Typography';
import { blue } from '@mui/material/colors';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';

const ContactDialog = ({onClose, open}) => {
    return (
        <Dialog
            onClose={onClose}
            open={open}
            scroll={'paper'}

        >
            <DialogTitle>Contact</DialogTitle>
            <DialogContent >
                <DialogContentText
                    id="scroll-dialog-description"
                    tabIndex={-1}
                >
                    <Typography variant="h5">
                        Email
                    </Typography>
                    <Typography variant="body1">
                        Questions or comments? Feel free to send me an email at timothy@jamesbarrett.us
                    </Typography>

                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose}>Back</Button>
            </DialogActions>

        </Dialog>
    );
}

export default ContactDialog;