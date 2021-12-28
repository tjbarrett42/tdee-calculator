import React, {useState, useEffect} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {create} from "@mui/material/styles/createTransitions";

const ActivityLevelTable = ({activity, mifflinArray}) => {
    const [ rows, setRows ] = useState([]);

    function createData(activityLevel, calories) {
        return { activityLevel, calories };
    }

    useEffect(()=>{
        setRows([
            createData('Basal Metabolic Rate', mifflinArray[0]+' calories per day'),
            createData('Sedentary', mifflinArray[1]+' calories per day'),
            createData('Light Exercise', mifflinArray[2]+' calories per day'),
            createData('Moderate Exercise', mifflinArray[3]+' calories per day'),
            createData('Heavy Exercise', mifflinArray[4]+' calories per day'),
            createData('Athlete', mifflinArray[5]+' calories per day')
        ]);
    }, mifflinArray)




    return (
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 300 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Activity Level</TableCell>
                            <TableCell align="right">Calories</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.activityLevel}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.activityLevel}
                                </TableCell>
                                <TableCell align="right">{row.calories}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
    );
}

export default ActivityLevelTable;