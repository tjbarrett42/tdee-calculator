import React, { useState } from 'react';
import { TextField, Select, Button, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import MenuItem from "@mui/material/MenuItem";
import Snackbar from "@mui/material/Snackbar";
import SnackbarContent from "@mui/material/SnackbarContent";
import Alert from "@mui/material/Alert";
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import 'flexmonster/flexmonster.css';
import Typography from "@mui/material/Typography";

const MeasurementForm = (props) => {
    const [ values, setValues ] = useState({ gender: '', age: '', weight: '', height: '', activity: '', units: "metric"});
    const [ snackBar, setSnackBar ] = useState(false);

    function calculate() {
        const isMissingValues = Object.values(values).some(x => x === null || x === '');
        if (!isMissingValues) {
            props.onMeasurementsToApp(values);
        } else {
            // TODO: make snackbar drop down in center for better viewing
            setSnackBar(true);
        }
    }

    function handleCloseSnackBar() {
        setSnackBar(false);
    }

    function handleUnitsChange() {
        if (values.units == "metric") {
            setValues({gender: values.gender, weight: values.weight, height: values.height, age: values.age, activity: values.activity, units: "imperial"});
        } else {
            setValues({gender: values.gender, weight: values.weight, height: values.height, age: values.age, activity: values.activity, units: "metric"});
        }
    }

    // TODO: condense handler for all values or smarter solution that doesn't update each property in state
    function onWeightChange(e) {
        setValues({gender: values.gender, weight: e.target.value, height: values.height, age: values.age, activity: values.activity, units: values.units})
    }
    function onHeightChange(e) {
        setValues({gender: values.gender, weight: values.weight, height: e.target.value, age: values.age, activity: values.activity, units: values.units})
    }
    function onAgeChange(e) {
        setValues({gender: values.gender, weight: values.weight, height: values.height, age: e.target.value, activity: values.activity, units: values.units})
    }
    function onGenderChange(e) {
        setValues({gender: e.target.value, weight: values.weight, height: values.height, age: values.age, activity: values.activity, units: values.units})
    }
    function onActivityChange(e) {
        setValues({gender: values.gender, weight: values.weight, height: values.height, age: values.age, activity: e.target.value, units: values.units})
    }

    return (
        <div>
            <Card>
                <CardContent >
                    <Typography variant="h5">
                        Measurements
                    </Typography>
                    <TabContext value={values.units}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <TabList onChange={handleUnitsChange} aria-label="lab API tabs example">
                                <Tab label="Metric" value="metric" />
                                <Tab label="Imperial" value="imperial" />
                            </TabList>
                        </Box>
                        <TabPanel value="metric">
                            <FormControl component="fieldset" fullWidth>
                                <TextField
                                    label="Gender"
                                    variant="filled"
                                    value={values.gender}
                                    onChange={onGenderChange}
                                    select
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                >
                                    <MenuItem value="male">Male</MenuItem>
                                    <MenuItem value="female">Female</MenuItem>
                                </TextField>
                                <TextField
                                    label="Age (yrs)"
                                    type="number"
                                    variant="filled"
                                    value={values.age}
                                    onChange={onAgeChange}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                                <TextField
                                    label="Weight (kg)"
                                    type="number"
                                    variant="filled"
                                    value={values.weight}
                                    onChange={onWeightChange}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                                <TextField
                                    label="Height (cm)"
                                    type="number"
                                    variant="filled"
                                    value={values.height}
                                    onChange={onHeightChange}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                                <TextField
                                    label="Activity Level"
                                    variant="filled"
                                    value={values.activity}
                                    onChange={onActivityChange}
                                    select
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                >
                                    <MenuItem value={0}>Basal</MenuItem>
                                    <MenuItem value={1}>Sedentary (office job) </MenuItem>
                                    <MenuItem value={2}>Light Exercise (1-2 times/week)</MenuItem>
                                    <MenuItem value={3}>Moderate Exercise (3-5 times/week)</MenuItem>
                                    <MenuItem value={4}>Heavy Exercise (6-7 times/week)</MenuItem>
                                    <MenuItem value={5}>Athlete (twice a day)</MenuItem>
                                </TextField>
                            </FormControl>
                        </TabPanel>
                        <TabPanel value="imperial">
                            <FormControl component="fieldset" fullWidth>
                                <TextField
                                    label="Gender"
                                    variant="filled"
                                    value={values.gender}
                                    onChange={onGenderChange}
                                    select
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                >
                                    <MenuItem value="male">Male</MenuItem>
                                    <MenuItem value="female">Female</MenuItem>
                                </TextField>
                                <TextField
                                    label="Age (yrs)"
                                    type="number"
                                    variant="filled"
                                    value={values.age}
                                    onChange={onAgeChange}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                                <TextField
                                    label="Weight (lbs)"
                                    type="number"
                                    variant="filled"
                                    value={values.weight}
                                    onChange={onWeightChange}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                                <TextField
                                    label="Height (in)"
                                    type="number"
                                    variant="filled"
                                    value={values.height}
                                    onChange={onHeightChange}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                                <TextField
                                    label="Activity Level"
                                    variant="filled"
                                    value={values.activity}
                                    onChange={onActivityChange}
                                    select
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                >
                                    <MenuItem value={0}>Basal</MenuItem>
                                    <MenuItem value={1}>Sedentary (office job) </MenuItem>
                                    <MenuItem value={2}>Light Exercise (1-2 times/week)</MenuItem>
                                    <MenuItem value={3}>Moderate Exercise (3-5 times/week)</MenuItem>
                                    <MenuItem value={4}>Heavy Exercise (6-7 times/week)</MenuItem>
                                    <MenuItem value={5}>Athlete (twice a day)</MenuItem>
                                </TextField>
                            </FormControl>
                        </TabPanel>
                    </TabContext>
                    <Button fullWidth="true" variant="contained" onClick={calculate}>
                        Calculate Caloric Expenditure
                    </Button>
                </CardContent>
            </Card>
            <Snackbar open={snackBar} autoHideDuration={6000} onClose={handleCloseSnackBar}>
                <Alert onClose={handleCloseSnackBar} severity="error" sx={{ width: '100%' }}>
                    Please fill out the values
                </Alert>
            </Snackbar>
        </div>
    )
}

export default MeasurementForm;