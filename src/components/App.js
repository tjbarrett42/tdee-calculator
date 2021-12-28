import React, { useState, useEffect } from 'react';
import MeasurementForm from "./MeasurementForm";
import Results from "./Results";
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import NavBar from "./NavBar";
import Grid from "@mui/material/Grid";
import Macros from "./Macros";

const App = () => {
    const [ submittedMeasurements, setSubmittedMeasurements ] = useState({});
    const [ calories, setCalories ] = useState('');

    async function measurementsToResults(values) {
        setSubmittedMeasurements(values);
    }

    async function resultsToMacros(calories) {
        setCalories(calories);
    }

    if (Object.keys(submittedMeasurements).length !== 0){
        return (
            <div>
                <Container>
                    <Paper elevation={24}>
                        <NavBar></NavBar>
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={4}>
                                <MeasurementForm onMeasurementsToApp={measurementsToResults}/>
                            </Grid>
                            <Grid item xs={12} md={8}>
                                <Results measurements={submittedMeasurements} onCaloriesToApp={resultsToMacros}/>
                            </Grid>
                        </Grid>
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={12}>
                                <Macros calories={calories}></Macros>
                            </Grid>
                        </Grid>


                    </Paper>


                </Container>

            </div>
        )
    } else {
        return (
            <div>
                <Container>
                    <Paper elevation={24}>
                        <NavBar></NavBar>
                        <Grid container  spacing={2}>
                            <Grid item xs={12} md={4}>
                                <MeasurementForm onMeasurementsToApp={measurementsToResults}/>
                            </Grid>
                        </Grid>
                    </Paper>
                </Container>

            </div>
        )
    }




}

export default App;
