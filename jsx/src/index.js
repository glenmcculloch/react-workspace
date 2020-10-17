import React from 'react';
import ReactDOM from 'react-dom';

function getButtonText() {
    return 'Click on Me!';
}

const App = function() {
    const buttonText = 'Click Me!';
    const style = {backgroundColor: 'blue', color: 'white'};
    return (
        <div>
            <label className="label" htmlFor="name">
                Enter name:
            </label>
            <input id="name" type="text" />
            <button style={style}>
                {buttonText}
            </button>
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));