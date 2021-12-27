import React from 'react';

const Results = ({ measurements }) => {
    const h = measurements.height; //Height in cm
    const a = measurements.age; //Age in years
    const m = measurements.weight; //Weight in kg
    const s = measurements.male ? 5 : -151; // Gender variable

    const mifflin = (10*m + 6.25*h - 5*a) + s;

    return (
        <div>
            results: {mifflin}
        </div>
    )
}

export default Results;