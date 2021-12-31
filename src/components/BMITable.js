import React, {useEffect, useState} from 'react';
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";

/* Static table build to create BMI table, but used state for future update in making BMI table responsive current classification bolded */
const BMITable = () => {
    const [ rows, setRows ] = useState([]);

    function createData(bmiScore, bmiClassification) {
        return { bmiScore, bmiClassification };
    }

    useEffect (() => {
        setRows([
            createData('<18.5', 'Underweight'),
            createData('18.5 - 24.99', 'Normal Weight'),
            createData('25 - 29.99', 'Overweight'),
            createData('>30', 'Obese'),
            ]);
    }, []);


    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 300 }} aria-label="Activity Levels" size="small">
                <TableHead>
                    <TableRow>
                        <TableCell>BMI Score</TableCell>
                        <TableCell align="right">Classification</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row.bmiScore}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row.bmiScore}
                            </TableCell>
                            <TableCell align="right">{row.bmiClassification}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default BMITable;