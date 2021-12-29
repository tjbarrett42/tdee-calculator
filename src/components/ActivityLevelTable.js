import React, {useState, useEffect} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {create} from "@mui/material/styles/createTransitions";
import './ActivityLevelTable.css';

const ActivityLevelTable = ({activity, mifflinArray}) => {
    const [ rows, setRows ] = useState([]);

    function createData(activityLevel, calories) {
        return { activityLevel, calories };
    }

    useEffect(()=>{
        setRows([
            createData('Basal Metabolic Rate', mifflinArray[0]),
            createData('Sedentary', mifflinArray[1]),
            createData('Light Exercise', mifflinArray[2]),
            createData('Moderate Exercise', mifflinArray[3]),
            createData('Heavy Exercise', mifflinArray[4]),
            createData('Athlete', mifflinArray[5])
        ]);
    }, mifflinArray)




    return (
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 300 }} aria-label="Activity Levels" size="small">
                    <TableHead>
                        <TableRow>
                            <TableCell>Activity Level</TableCell>
                            <TableCell align="right">Calories Per Day</TableCell>
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
                                <TableCell align="right">{Number(row.calories).toLocaleString()}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
    );
}

export default ActivityLevelTable;