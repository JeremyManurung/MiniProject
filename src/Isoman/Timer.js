import React, { useEffect, Fragment } from 'react';
import { Grid, Typography } from '@material-ui/core';

const Timer = ({
    days,hours, minutes, seconds,setDays,
    setHours, setMinutes, setSeconds,
    started, paused,
    setStarted, setFinished
}) => {
    
    useEffect(() => {
        if (paused === true) {
            const myInterval = setInterval(() => {
                if (seconds > 0) {
                    setSeconds(seconds - 1)
                }
                if (seconds === 0) {
                    if (minutes === 0) {
                        if (hours === 0) {
                            if(days === 0 ){
                            setStarted(false);
                            setFinished(true);
                            clearInterval(myInterval);  
                            }else{
                                setDays(days-1);
                                setHours(59);
                                setMinutes(59);
                                setSeconds(59);
                            }
                        } else {
                            setHours(hours - 1);
                            setMinutes(59);
                            setSeconds(59);
                        }
                    } else {
                        setMinutes(minutes - 1);
                        setSeconds(59);
                    }
                }
            }, 1000);
            
            return () => clearInterval(myInterval);
        }
    });
    
    return (
        <Fragment>
            <Grid item>
                <Typography variant="h4">
                    {days < 10 ? `1${4}` : days } : { hours < 10 ? `0${hours}` : hours } : { minutes < 10 ? `0${minutes}` : minutes } : { seconds < 10 ? `0${ seconds }` : seconds }
                </Typography>
            </Grid>
        </Fragment>
    );
};

export default Timer;