import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import {FormControl, TextField} from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import MacrosTable from './MacrosTable';
import Typography from "@mui/material/Typography";

const Macros = (props) => {
    const [ macros, setMacros ] = useState("maintenance");

    function onMacrosChange(event, newMacros) {
        setMacros(newMacros);
    }

    const maintenanceMacros = calculateMacros(props.calories);
    const cuttingMacros = calculateMacros(props.calories-500);
    const bulkingMacros = calculateMacros(props.calories+500);

    function mr(num){
        return Math.round(num);
    }

    function calculateMacros(calories) {
        // Moderate carb 30/35/35
        let macrosArray = [];
        let p = calories*.30, f = calories*.35, c = calories*.35;
        macrosArray.push([[mr(p),mr(p/4)],[mr(f),mr(f/9)],[mr(c),mr(c/4)]]);

        // Lower carb 40/40/20
        p = calories*.40; f = calories*.40; c = calories*.20;
        macrosArray.push([[mr(p),mr(p/4)],[mr(f),mr(f/9)],[mr(c),mr(c/4)]]);

        // Higher carb 30/20/50
        p = calories*.30; f = calories*.20; c = calories*.50;
        macrosArray.push([[mr(p),mr(p/4)],[mr(f),mr(f/9)],[mr(c),mr(c/4)]]);

        return macrosArray;
    }

    return (
        <div>
            <Card>
                <CardContent>
                    <Typography variant="h5">
                        Macronutrients
                    </Typography>
                    <TabContext value={macros}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <TabList onChange={onMacrosChange} aria-label="lab API tabs example">
                                <Tab label="Maintenance" value="maintenance" />
                                <Tab label="Cutting" value="cutting" />
                                <Tab label="Bulking" value="bulking" />
                            </TabList>
                        </Box>
                        <TabPanel value="maintenance">
                            <Typography variant="body2">
                                These macronutrient split options are representative of your maintenance calories of {props.calories} calories per day.
                            </Typography>
                            <MacrosTable macros={maintenanceMacros}/>
                        </TabPanel>
                        <TabPanel value="cutting">
                            <Typography variant="body2">
                                These macronutrient split options are representative of your cutting calories (500 calorie deficit) of {props.calories-500} calories per day.
                            </Typography>
                            <MacrosTable macros={cuttingMacros}/>
                        </TabPanel>
                        <TabPanel value="bulking">
                            <Typography variant="body2">
                                These macronutrient split options are representative of your bulking calories (500 calorie surplus) of {props.calories+500} calories per day.
                            </Typography>
                            <MacrosTable macros={bulkingMacros}/>
                        </TabPanel>
                    </TabContext>

                </CardContent>
            </Card>
        </div>
    )
}

export default Macros;