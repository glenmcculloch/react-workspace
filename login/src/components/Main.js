import React, { useState, useEffect } from 'react';

const Main = (user, timeLoggedIn) => {
    const [timeToLogout, setTimeToLogout] = useState(5);
    const [timeLoggedIn, setTimeLoggedIn] = useState(null);

    useEffect(() => {
        // set a timer to log out
        if (user.type === 'TYPE_USER') {
            const timerId = setTimeout(() => {
                setTimeToLogout(timeToLogout - 1);
            }, 1000);

            return () => {
                clearTimeout(timerId);
            };
        }

        const today = new Date();
        const time  = today.getHours() + ';' + today.getMinutes() + ':' + today.getSeconds();
        setTimeLoggedIn(time);
    }, []);

    useEffect(() => {
        if (!timeToLogout) {
            // send callback to app
        }

    }, [timeToLogout]);

    return (
        <div className="ui segment">
            Successfully logged in.
            <br /><br />
            Time: {timeLoggedIn}
            <br /><br />
            You will be logged out in {timeToLogout} seconds.
        </div>
    );
};

export default Main;