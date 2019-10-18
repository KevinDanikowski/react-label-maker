import React from 'react'
import PropTypes from 'prop-types';
import { Form } from 'semantic-ui-react';

class SenderAddress extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nameError: true,
            streetError: true,
            cityError: true,
            stateError: true,
            zipError: true,
        }
    }

    setData = (e, type) => {
        this.props.onAction(e, `from.${type}`)

        const value = this.props.wizardContext.from[type]
        const errorName = `${type}Error`;
        const errorState = !value || (value && value.length < 1) ? `"${type}" is required` : null

        this.setState({
            [errorName]: errorState
        })
        
        if (this.checkValidation()) {
            return this.props.onAction(e, `from.${type}`, true)
        }
    }

    checkValidation = () => {
        const {nameError, streetError, cityError, stateError, zipError} = this.state;
        if (!nameError &&
            !streetError &&
            !cityError &&
            !stateError &&
            !zipError
        ) {
            return true;
        }
        return false;
    }

    render() {
        return (
            <Form>
                <h2>Sender's Address:</h2>
                <Form.Group inline>
                    <label>Name</label>
                    <Form.Input fluid
                        error={this.state.nameError}
                        onBlur={(e) => this.setData(e, 'name')}
                        placeholder='Name'
                        width={16}
                        value={this.props.wizardContext.from.name}
                        onChange={(e) => this.setData(e, 'name')} />
                </Form.Group>
                <Form.Group inline>
                    <label>Street</label>
                    <Form.Input fluid
                        error={this.state.streetError}
                        onBlur={(e) => this.setData(e, 'street')}
                        placeholder='Street'
                        width={16}
                        value={this.props.wizardContext.from.street}
                        onChange={(e) => this.setData(e, 'street')} />
                </Form.Group>
                <Form.Group inline>
                    <label>City</label>
                    <Form.Input fluid
                        placeholder='City'
                        error={this.state.cityError}
                        onBlur={(e) => this.setData(e, 'city')}
                        width={8}
                        value={this.props.wizardContext.from.city}
                        onChange={(e) => this.setData(e, 'city')} />
                    <label>State</label>
                    <Form.Input fluid
                        error={this.state.stateError}
                        onBlur={(e) => this.setData(e, 'state')}
                        placeholder='State'
                        width={6}
                        value={this.props.wizardContext.from.state}
                        onChange={(e) => this.setData(e, 'state')} />
                    <label>Zip</label>
                    <Form.Input fluid
                        error={this.state.zipError}
                        onBlur={(e) => this.setData(e, 'zip')}
                        placeholder='Zip Code'
                        width={8}
                        value={this.props.wizardContext.from.zip}
                        onChange={(e) => this.setData(e, 'zip')} />
                </Form.Group>
            </Form>
        );
    }
}

export default SenderAddress;

SenderAddress.propTypes = {
    wizardContext: PropTypes.object,
    onAction: PropTypes.func
}