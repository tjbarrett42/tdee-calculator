import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import MacrosTable from './MacrosTable';
import Typography from "@mui/material/Typography";
import Container from '@mui/material/Container';

/* Macros parent component. Contains state of current macros shown in tabs */
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

    /* Three dimensional array to contain macro information, cleanest way to reuse code for bulking and cutting*/
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
        <Container>
                <Typography variant="h5">
                    Macronutrients
                </Typography>
                <TabContext value={macros}>
                    <Box className="tabs" sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <TabList className="tabs" onChange={onMacrosChange} aria-label="lab API tabs example">
                            <Tab className="tabs" label="Maintenance" value="maintenance" />
                            <Tab className="tabs" label="Cutting" value="cutting" />
                            <Tab className="tabs" label="Bulking" value="bulking" />
                        </TabList>
                    </Box>
                    <TabPanel value="maintenance">
                        <Typography variant="body2">
                            These macronutrient split options are representative of your maintenance calories of <strong>{Number(props.calories).toLocaleString()} calories per day</strong>.
                        </Typography>
                        <MacrosTable macros={maintenanceMacros}/>
                        <Typography variant="subtitle2">
                            30/35/35 means 30% calories by Protein, 35% by fat, 35% by carbs. There are 4 calories per gram of protein and carbs, 9 calories per gram of fat.
                        </Typography>
                    </TabPanel>
                    <TabPanel value="cutting">
                        <Typography variant="body2">
                            These macronutrient split options are representative of your cutting calories (500 calorie deficit) of <strong>{Number(props.calories-500).toLocaleString()} calories per day</strong>.
                        </Typography>
                        <MacrosTable macros={cuttingMacros}/>
                        <Typography variant="subtitle2">
                            30/35/35 means 30% calories by Protein, 35% by fat, 35% by carbs. There are 4 calories per gram of protein and carbs, 9 calories per gram of fat.
                        </Typography>
                    </TabPanel>
                    <TabPanel value="bulking">
                        <Typography variant="body2">
                            These macronutrient split options are representative of your bulking calories (500 calorie surplus) of <strong>{Number(props.calories+500).toLocaleString()} calories per day</strong>.
                        </Typography>
                        <MacrosTable macros={bulkingMacros}/>
                        <Typography variant="subtitle2">
                            30/35/35 means 30% calories by Protein, 35% by fat, 35% by carbs. There are 4 calories per gram of protein and carbs, 9 calories per gram of fat.
                        </Typography>
                    </TabPanel>
                </TabContext>
        </Container>
    )
}

export default Macros;