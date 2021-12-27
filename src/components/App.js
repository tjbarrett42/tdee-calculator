import React, { useState } from 'react';
import MeasurementForm from "./MeasurementForm";
import Results from "./Results";

const App = () => {
    const [ submittedMeasurements, setSubmittedMeasurements ] = useState({});

    async function measurementsToResults(values) {
        setSubmittedMeasurements(values);
        console.log('sending ', values, ' to results');
    }

    return (
        <div>
            app div
            <MeasurementForm onMeasurementsToApp={measurementsToResults}/>
            <Results measurements={submittedMeasurements}/>
        </div>
    )
}

export default App;
