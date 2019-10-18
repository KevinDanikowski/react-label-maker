import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Form } from 'semantic-ui-react';


export default class Weight extends Component {
    constructor(props) {
        super(props)
        this.state = {
            weightError: true,
        }
    }

    setData = (e, type) => {
        this.props.onAction(e, type)

        const value = this.props.wizardContext[type]
        const errorName = `${type}Error`;
        const notInt = isNaN(parseInt(value, 10))
        const errorState = !value || notInt ? `Weight is required in pounds` : null

        this.setState({
            [errorName]: errorState
        })

        if (value && !notInt) {
            return this.props.onAction(e, type, true)
        }
    }

    render() {
        return (
            <Form>
                <h2>Enter Weight:</h2>
                <Form.Group inline>
                    <label>Weight (pounds)</label>
                    <Form.Input fluid
                        error={this.state.weightError}
                        onBlur={(e) => this.setData(e, 'weight')}
                        placeholder='Weight'
                        width={16}
                        value={this.props.wizardContext.weight}
                        onChange={(e) => this.setData(e, 'weight')} />
                </Form.Group>
            </Form>
        )
    }
}

Weight.propTypes = {
    wizardContext: PropTypes.object,
    onAction: PropTypes.func
}