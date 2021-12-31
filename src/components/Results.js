import React, { useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from "@mui/material/Typography";
import ActivityLevelTable from "./ActivityLevelTable";
import Grid from "@mui/material/Grid";
import './Results.css';
import Box from "@mui/material/Box";
import Container from '@mui/material/Container';
import BMITable from "./BMITable";

/* Main math component. Calculates mifflin equation, BMI equation, and considers metric and imperial entries accordingly */
const Results = (props) => {
    const activityLevels = ['basal', 'sedentary', 'light exercise', 'moderate exercise', 'heavy exercise', 'athlete'];
    const h = props.measurements.height; //Height in cm
    const a = props.measurements.age; //Age in years
    const m = props.measurements.weight; //Weight in kg
    const s = (props.measurements.gender === "male") ? 5 : -151; // Gender variable
    const u = props.measurements.units;
    const l = props.measurements.activity;

    let mifflin = null;
    let mifflinActivityLevelAdjusted = null;
    let bmi = null;

    if ( u === "metric") {
        mifflin = ((10*m + 6.25*h - 5*a) + s);
    } else {
        mifflin = ((10*m*0.453592 + 6.25*h*2.54 - 5*a) + s);
    }
    mifflinActivityLevelAdjusted = mifflin;

    if (l > 0) {
        mifflinActivityLevelAdjusted += mifflin*(l*0.175+.025);
    }

    const mifflinActivityArray = [];

    for (let i = 0; i <= 5; i++) {
        let mifflinAtLevel = mifflin;
        if (i > 0) {
            mifflinAtLevel += mifflinAtLevel * (i * 0.175 + .025);
        }
        mifflinActivityArray.push(Math.round(mifflinAtLevel));
    }

    mifflinActivityLevelAdjusted = Math.round(mifflinActivityLevelAdjusted);

    if ( u === "metric") {
        bmi = (m / ((h / 100) * (h / 100)));
    } else {
        const hImp = h*2.54;
        const mImp = m*0.453592;
        bmi = (mImp / ((hImp / 100) * (hImp / 100)));
    }

    useEffect(()=>{
        props.onCaloriesToApp(mifflinActivityLevelAdjusted);
    }, [props.measurements])

    return (
        <Container className="results-container">
                <Typography className="results-title" variant="h5">
                    Results
                </Typography>
                <Box sx={{ borderTop: 1, borderColor: 'divider' , height: 20}}/>
                <Grid container>
                    <Grid item xs={12} md={12} lg={12}>
                        <Container >
                        <Card className="results-card">
                            <CardContent>
                                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                    Maintenance calories at {activityLevels[props.measurements.activity]} activity level:
                                </Typography>
                                <Typography variant="h5" component="div">
                                    <strong>{Number(mifflinActivityLevelAdjusted).toLocaleString()} calories per day</strong>
                                </Typography>
                                <Typography variant="h5" component="div">
                                    {Number(mifflinActivityLevelAdjusted * 7).toLocaleString()} calories per week
                                </Typography>
                            </CardContent>
                        </Card>
                        </Container>

                    </Grid>
                    <Grid item xs={12} md={12} lg={6}>
                        <Container className="table-desc">
                            <Typography variant="body2">
                                Your maintenance calories will vary at these activity levels:
                            </Typography>
                        </Container>
                        <ActivityLevelTable mifflinArray={mifflinActivityArray} activity={props.measurements.activity}/>
                    </Grid>
                    <Grid item xs={12} md={12} lg={6}>
                        <Container className="table-desc">
                            <Typography variant="body2">
                                Your Body Mass Index (BMI) is: <strong>{Math.round(bmi * 100)/100}</strong>.
                            </Typography>
                        </Container>
                        <BMITable/>
                    </Grid>
                </Grid>
        </Container>
    )
}

export default Results;