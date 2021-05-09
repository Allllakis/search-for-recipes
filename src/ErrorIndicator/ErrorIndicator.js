import React from 'react';

import classes from './ErrorIndicator.module.css';



const ErrorIndicator = () => {
    return (
        <div className={classes.ErrorIndicator}>
            <span className={classes.Boom}>BOOM!!!</span>
            <span>something has gone terribly wrong</span>
        </div>
    )
}


export default ErrorIndicator;