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

const AboutDialog = ({onClose, open}) => {
    return (
        <Dialog
            onClose={onClose}
            open={open}
            scroll={'paper'}

        >
            <DialogTitle>About the TDEE Calculator</DialogTitle>
            <DialogContent >
                <DialogContentText
                    id="scroll-dialog-description"
                    tabIndex={-1}
                >
                    <Typography variant="h5">
                        Development
                    </Typography>
                    <Typography variant="body1">
                        This Total Daily Expenditure Estimator calculator was inspired by and modeled after Rob and Jake's TDEE Calculator (tdeecalculator.net) as a side project for working on my skills with the React framework, with my personal interest in health and fitness being a large motivator.
                    </Typography>
                    <br/>
                    <Typography variant="h5">
                        Formulas
                    </Typography>
                    <Typography variant="body1">
                        Gender, age, weight, and height are recorded to complete the Mifflin St-Jeor formula (2005) returning a basal metabolic rate (BMR) in calories:
                    </Typography>
                    <br/>
                    <Typography variant="body1">
                        Mifflin = (10m + 6.25h - 5a) + s
                    </Typography>
                    <Typography variant="body2">
                        m = mass in kg, h = height in cm, a = age in years, s = 5 for males and -151 for females
                    </Typography>
                    <br/>
                    <Typography variant="h5">
                        Calculations
                    </Typography>
                    <Typography variant="body1">
                        The maintenance calorie count is increased to reflect increased activity levels:
                    </Typography>
                    <br/>
                    <Typography variant="body1" style={{whiteSpace: 'pre-line'}}>
                        Sedentary = BMR + 20%
                        <br/>
                        Light Exercise = BMR + 37.5%
                        <br/>
                        Moderate Exercise = BMR + 55%
                        <br/>
                        Heavy Exercise = BMR + 72.5%
                        <br/>
                        Athlete = BMR + 90%
                    </Typography>
                    <br/>
                    <Typography variant="body1">
                        Macros are subsequently calculated by dividing the daily calories into moderate carb, low carb, and high carb splits. These macros are then divided again by calorie per gram for respective macros. Protein and carbs are 4 calories per gram, and fat is 9 calories per gram.
                        <br/>
                        Cutting and bulking macros are calculated with the same method with a 500 calorie deficit or surplus respectively.
                    </Typography>

                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose}>Back</Button>
            </DialogActions>

        </Dialog>
    );
}

export default AboutDialog;