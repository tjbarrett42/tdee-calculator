import React, { useState } from 'react';
import { TextField, Button, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from '@mui/material';

const MeasurementForm = (props) => {
    const [ values, setValues ] = useState({ male: true, age: 0, weight: 0, height: 0, })

    function calculate() {
        props.onMeasurementsToApp(values);
    }
    // TODO: condense handler for all values
    function onWeightChange(e) {
        setValues({male: values.male, weight: e.target.value, height: values.height, age: values.age})
    }
    function onHeightChange(e) {
        setValues({male: values.male, weight: values.weight, height: e.target.value, age: values.age})
    }
    function onAgeChange(e) {
        setValues({male: values.male, weight: values.weight, height: values.height, age: e.target.value})
    }
    function onGenderChange(e) {
        setValues({male: e.target.value, weight: values.weight, height: values.height, age: values.age})
    }

    return (
        <div>
            MeasurementForm
            <div>
                <FormControl component="fieldset">
                    <FormLabel component="legend">Gender</FormLabel>
                    <RadioGroup row aria-label="gender" name="row-radio-buttons-group" value={values.male} onChange={onGenderChange}>
                        <FormControlLabel value="false" control={<Radio />} label="Female" />
                        <FormControlLabel value="true" control={<Radio />} label="Male" />
                    </RadioGroup>

                <TextField
                    id="outlined-number"
                    label="Age"
                    type="number"
                    variant="filled"
                    value={values.age}
                    onChange={onAgeChange}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <TextField
                    id="outlined-number"
                    label="Weight"
                    type="number"
                    variant="filled"
                    value={values.weight}
                    onChange={onWeightChange}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <TextField
                    id="outlined-number"
                    label="Height"
                    type="number"
                    variant="filled"
                    value={values.height}
                    onChange={onHeightChange}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                </FormControl>
            </div>

            <Button onClick={calculate}>
                Calculate
            </Button>

        </div>
    )
}

export default MeasurementForm;