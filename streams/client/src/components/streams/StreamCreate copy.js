import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { createStream } from '../../actions';

class StreamCreate extends React.Component {
    renderError({ error, touched }) {
        if (touched && error) {
            return (
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            );
        }
    }

    renderInput = ({ input, label, meta }) => {
        const className = `field ${meta.touched && meta.error ? 'error' : ''}`;
        return (
            <div className={className}>
                <label>{label}</label>
                <input {...input} autoComplete="off" />
                {this.renderError(meta)}
            </div>
        );
    }

    onSubmit = formValues => {
        this.props.createStream(formValues);
    }

    render() {
        return (
            <form className="ui form error" onSubmit={this.props.handleSubmit(this.onSubmit)}>
                <Field 
                    name="title"
                    label="Enter Title"
                    component={this.renderInput}
                    type="text"
                />
                <Field 
                    name="description"
                    label="Enter Description"
                    component={this.renderInput}
                    type="text"
                />
                <button className="ui button primary">Submit</button>
            </form>
        );
    }
};

const validate = ({ title, description }) => {
    const errors = {};

    if (!title) {
        errors.title = "You must enter a title.";
    }
    if (!description) {
        errors.description = "You must enter a description.";
    }

    return errors;
};

// redux form takes one object - what the form is called
//  validation can be done through validate
const formWrapped = reduxForm({
    form: 'streamCreate',
    validate: validate
})(StreamCreate);

export default connect(null, { createStream })(formWrapped);