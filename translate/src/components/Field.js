import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

class Field extends React.Component {
    // Creating a link with the context object
    //  static adds a property to the class itself
    static contextType = LanguageContext;
    
    render() {
        const text = this.context.language === 'english' ? 'Name' : 'Naam';
        return (
            <div className="ui field">
                <label>{text}</label>
                <input />
            </div>
        );
    }
};

export default Field;