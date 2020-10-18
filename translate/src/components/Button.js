import React from 'react';
import LanguageContext from '../contexts/LanguageContext';
import ColourContext from '../contexts/ColourContext';

class Button extends React.Component {
    renderButton(colour) {
        return (
            <button className={`ui button ${colour}`}>
                <LanguageContext.Consumer>
                    {(language) => language === 'english' ? 'Submit' : 'Voorleggen'}
                </LanguageContext.Consumer>
            </button>
        )
    }

    render() {
        return (
            <ColourContext.Consumer>
                {value => this.renderButton(value)}
            </ColourContext.Consumer>
        );
    }
};

export default Button;