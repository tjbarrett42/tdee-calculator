import React, { useState, useEffect } from 'react';
import MeasurementForm from "./MeasurementForm";
import Results from "./Results";
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import NavBar from "./NavBar";
import Grid from "@mui/material/Grid";
import Macros from "./Macros";
import Footer from "./Footer";
import {Typography} from "@mui/material";
import './App.css';

const App = () => {
    /* Measurements state obtained by MeasurementsForm component and calories state updated by Results, sent to Macros */
    const [ submittedMeasurements, setSubmittedMeasurements ] = useState({});
    const [ calories, setCalories ] = useState('');

    async function measurementsToResults(values) {
        setSubmittedMeasurements(values);
    }

    async function resultsToMacros(calories) {
        setCalories(calories);
    }

    /* Render Results/Macros components only when submitted at least once, dive screen otherwise */
    if (Object.keys(submittedMeasurements).length !== 0){
        return (
            <div>
                <Container>
                    <Paper elevation={24}>
                        <NavBar></NavBar>
                        <Grid item container spacing={0} >
                            <Grid item xs={12} md={4} >
                                <MeasurementForm onMeasurementsToApp={measurementsToResults}/>
                            </Grid>
                            <Grid item xs={12} md={8}>
                                <Results measurements={submittedMeasurements} onCaloriesToApp={resultsToMacros}/>
                            </Grid>
                        </Grid>
                        <Grid container spacing={0}>
                            <Grid item xs={12} md={12}>
                                <Macros calories={calories}></Macros>
                            </Grid>
                        </Grid>
                    </Paper>
                </Container>
                <Footer></Footer>
            </div>
        )
    } else {
        return (
            <div>
                <Container>
                    <Paper elevation={24}>
                        <NavBar></NavBar>
                            <Grid container spacing={0}>
                                <Grid item xs={12} md={4}>
                                    <MeasurementForm onMeasurementsToApp={measurementsToResults}/>
                                </Grid>
                                <Grid className="app-intro-grid" item xs={12} md={8}>
                                    <Typography variant="h4">
                                        Welcome to the Total Daily Expenditure Estimator (TDEE)!
                                    </Typography>
                                    <Typography variant="h5">
                                        Calculate your basal metabolic rate, body mass index, and macronutrient splits for maintenance, cutting, and bulking.
                                    </Typography>
                                </Grid>
                            </Grid>

                    </Paper>
                </Container>
                <Footer></Footer>
            </div>
        )
    }




}

export default App;
