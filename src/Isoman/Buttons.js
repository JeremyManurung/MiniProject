import React, { Fragment } from 'react';
import { Button } from '@material-ui/core';

const Buttons = ({
    started, paused, finished,
    handleStart, handlePause, handleReset
}) => {
    if (started) {
        return (
            <Fragment>
                <Button variant="contained" onClick={handlePause} disableElevation>
                    {paused ? "Pause" : "Resume"}
                </Button>
                <Button color="white" variant="contained" onClick={handleReset} disableElevation>
                    Reset
                </Button>
            </Fragment>
        );
    }

    return (
        <div className="IsoManButton">
        <Fragment>
            <Button variant="contained" color="primary" 
            onClick={finished ? handleReset : handleStart} disableElevation>
            {finished ? "Kembali" : "Mulai"}
            </Button>
        </Fragment>
        </div>
    );
};

export default Buttons;
