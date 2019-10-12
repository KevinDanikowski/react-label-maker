import React from 'react'
import { Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import '../index.css'

export default function Navigator({totalSteps, onConfirm, currentStep, nextStep, previousStep, nextButtonDisabled}) {
    const lastStep = currentStep === totalSteps;

    return (
        <div className='navigator-buttons'>
            {currentStep > 1 && <Button onClick={previousStep}>Back</Button>}
            {!lastStep ? 
                <Button disabled={nextButtonDisabled} onClick={nextStep}>Continue</Button> 
                : <Button id='confirm-button' onClick={onConfirm}>Confirm</Button>}
        </div>
    )
}

Navigator.propTypes = {
    totalSteps: PropTypes.number.isRequired,
    NextButtonDisabled: PropTypes.bool,
    currentStep: PropTypes.number.isRequired,
    nextStep: PropTypes.func.isRequired,
    previousStep: PropTypes.func.isRequired,
    onConfirm: PropTypes.func.isRequired
}