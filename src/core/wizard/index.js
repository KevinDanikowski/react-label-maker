import React, { Component } from 'react';
import { Progress } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import Navigator from '../Navigator';
import _ from 'lodash';

export default class Wizard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            stepIndex: 0,
            wizardContext: props.wizardContext,
            nextButtonDisabled: true
        }
    }

    nextStep = () => {
        this.setState({
            stepIndex: this.state.stepIndex + 1,
            nextButtonDisabled: this.state.stepIndex + 1 !== 3
        })
    }

    previousStep = () => {
        this.setState({
            stepIndex: this.state.stepIndex - 1,
            nextButtonDisabled: false
        })
    }

    onAction = (e, parameter, formValidated = false) => {
        const value = (typeof e === 'object') ? e.target.value : e;

        this.setState({
            wizardContext: _.set(this.state.wizardContext, parameter, value)
        })
        if (formValidated) {
            this.setState({nextButtonDisabled: false})
        }

    }

    getStep = () => {
        return React.cloneElement(this.props.steps[this.state.stepIndex], {
            wizardContext: this.state.wizardContext,
            onAction: this.onAction
        })
    }

    completeForm = () => {
        this.props.onComplete(this.state.wizardContext)
    }

    render() {
        const totalSteps = this.props.steps.length;

        return (
            <div className='form-wrapper'>
                {this.props.header}
                {this.state.stepIndex + 1 !== totalSteps && <Progress percent={(this.state.stepIndex + 1) * 100 / totalSteps} color='red' progress />}
                {this.getStep()}
                <Navigator
                    totalSteps={totalSteps}
                    onConfirm={this.completeForm}
                    nextButtonDisabled={this.state.nextButtonDisabled}
                    currentStep={this.state.stepIndex + 1}
                    nextStep={this.nextStep}
                    previousStep={this.previousStep}
                />
            </div>
        )
    }
}

Wizard.propTypes = {
    header: PropTypes.object.isRequired,
    steps: PropTypes.array.isRequired,
    wizardContext: PropTypes.object.isRequired,
    onComplete: PropTypes.func.isRequired
}