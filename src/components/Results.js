import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from "@mui/material/Typography";
import ActivityLevelTable from "./ActivityLevelTable";

const Results = (props) => {
    const h = props.measurements.height; //Height in cm
    const a = props.measurements.age; //Age in years
    const m = props.measurements.weight; //Weight in kg
    const s = (props.measurements.gender === "male") ? 5 : -151; // Gender variable
    const u = props.measurements.units;
    const l = props.measurements.activity;
    let mifflin = null;
    let mifflinActivityLevelAdjusted = null;

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

    props.onCaloriesToApp(mifflinActivityLevelAdjusted);

    return (
        <Card>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    Maintenance Calories:
                </Typography>
                <Typography variant="h5" component="div">
                    {mifflinActivityLevelAdjusted} calories per day
                </Typography>
                <Typography variant="h5" component="div">
                    {mifflinActivityLevelAdjusted * 7} calories per week
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    Not fat % adjusted
                </Typography>
                <Typography variant="body2">
                    Basal metabolic rate (BMR) is the rate of energy expenditure per unit time by endothermic animals at rest.
                </Typography>
                <ActivityLevelTable mifflinArray={mifflinActivityArray} activity={props.measurements.activity}>

                </ActivityLevelTable>
            </CardContent>
        </Card>
    )
}

export default Results;