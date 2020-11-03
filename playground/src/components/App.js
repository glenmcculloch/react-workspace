import React from 'react';

const App = () => {
    const renderStuff = () => {
        let thisString = 16 + 15 + 'volvo';

        return thisString;
    };

    return (
        <div>
            {renderStuff()}
        </div>
    );
};

export default App;