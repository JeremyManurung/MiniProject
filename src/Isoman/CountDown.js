import React, { Fragment, useState } from 'react';
import { Grid, Typography } from '@material-ui/core';
import TimerIcon from '@material-ui/icons/Timer';
import Timer from './Timer';
import Buttons from './Buttons';

const Countdown = () => {
    const [days,setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [started, setStarted] = useState(false);
    const [paused, setPaused] = useState(false);
    const [finished, setFinished] = useState(false);

    const handleStart = () => {
        setPaused(true);
        setStarted(true);
    };

    const handlePause = () => {
        if (paused === false) {
            setPaused(true);
        } else {
            setPaused(false);
        }
    };

    const handleReset = () => {
        setStarted(false);
        setPaused(false);
        setFinished(false);
        setDays(14);
        setHours(0);
        setMinutes(0);
        setSeconds(0);
    };

    if (finished) {
        return (
            <Fragment>
                <Grid item>
                    <Typography variant="h5" gutterBottom>Yeayyy Kamu udah berhasil melewati isolasi mandiri tetap semangat terus ya, semoga bisa melakukan aktifitas seperti biasanya, terus ikuti prokess ya</Typography>
                </Grid>
                <Grid item>
                    <Buttons
                    started={started} paused={paused} finished={finished}
                    handleStart={handleStart}
                    handlePause={handlePause}
                    handleReset={handleReset}
                    />
                </Grid>
            </Fragment>
        );
    } else {
        return (
            <Fragment>
                {started ? (
                    <Grid item>
                        <Typography variant="h6" gutterBottom>Waktu Berjalan</Typography>
                    </Grid>
                ) : (
                    <Grid container justify="center" spacing={3}>
                    </Grid>
                )
                }

                <Timer
                days={days} hours={hours} minutes={minutes} seconds={seconds}
                setDays={setDays} setHours={setHours} setMinutes={setMinutes} setSeconds={setSeconds}
                started={started} paused={paused} finished={finished}
                setStarted={setStarted} setFinished={setFinished}
                handleStart={handleStart}
                handlePause={handlePause}
                handleReset={handleReset}
                />

                <Grid container justify="space-evenly" style={{marginTop: 12}}>
                    <Buttons
                    started={started} paused={paused} finished={finished}
                    handleStart={handleStart}
                    handlePause={handlePause}
                    handleReset={handleReset}
                    />
                </Grid>
            </Fragment>
        );
    }
};

export default Countdown;
