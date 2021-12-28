import React, {useState} from 'react';
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


const MacrosTable = ({macros}) => {

    function createData(name, modCarb, lowCarb, highCarb) {
        return { name, modCarb, lowCarb, highCarb };
    }

    const rows = [
        createData('Protein', macros[0][0][1]+'g ('+macros[0][0][0]+' calories)', macros[1][0][1]+'g ('+macros[1][0][0]+' calories)', macros[2][0][1]+'g ('+macros[2][0][0]+' calories)'),
        createData('Fat', macros[0][1][1]+'g ('+macros[0][1][0]+' calories)', macros[1][1][1]+'g ('+macros[1][1][0]+' calories)', macros[2][1][1]+'g ('+macros[2][1][0]+' calories)'),
        createData('Carbs', macros[0][2][1]+'g ('+macros[0][2][0]+' calories)', macros[1][2][1]+'g ('+macros[1][2][0]+' calories)', macros[2][2][1]+'g ('+macros[2][2][0]+' calories)'),
    ];

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Macronutrient</TableCell>
                        <TableCell align="right">Moderate Carb (30/35/35)</TableCell>
                        <TableCell align="right">Lower Carb (40/40/20)</TableCell>
                        <TableCell align="right">Higher Carb (30/20/50)</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell align="right">{row.modCarb}</TableCell>
                            <TableCell align="right">{row.lowCarb}</TableCell>
                            <TableCell align="right">{row.highCarb}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default MacrosTable;