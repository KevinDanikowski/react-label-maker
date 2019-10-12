import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import Wizard from '../../core/wizard';
import Header from '../../core/Header';
import ShippingLabelWizardSchema from './ShippingLabelWizardSchema';
import { Segment } from 'semantic-ui-react';
import {
    SenderAddress,
    ReceiverAddress,
    ShippingOptions,
    Weight,
    Confirm
} from './steps';

export default class ShippingLabelMaker extends Component {
    constructor(props) {
        super(props)
        this.state = {
            formComplete: false,
            wizardContext: ShippingLabelWizardSchema,
            shippingTotal: ''
        }
    }

    buildLabel = (data) => {
        this.setState({
            formComplete: true,
            wizardContext: data
        })
    }
    calculateShipping = () => {
        const {weight, shippingOption} = this.state.wizardContext || {};
        const shippingRate = 0.40;
        const shippingCost = weight * shippingRate * (shippingOption === 1 ? 1 : 1.5)
        return shippingCost.toFixed(2)
    }

    createNewLabel = () => {
        this.setState({
            formComplete: false,
            wizardContext: ShippingLabelWizardSchema
        })
    }

    render() {
        const {from, to, weight, shippingOption} = this.state.wizardContext || {};
        const Steps = [
            <ReceiverAddress />,
            <SenderAddress />,
            <Weight />,
            <ShippingOptions />,
            <Confirm />
        ]

        return (
            <div className='main-wrapper'>
                {this.state.formComplete ?
                    <div className='label-wrapper'>
                        <div className='label'>
                            <Segment.Group>
                                <Segment>
                                    <h3>From:</h3>
                                </Segment>
                                <Segment.Group>
                                    <Segment>{from.name}</Segment>
                                    <Segment>{from.street}</Segment>
                                    <Segment>
                                        {from.city}
                                        {from.state}
                                        {from.zip}
                                    </Segment>
                                </Segment.Group>
                                <Segment>
                                    <h3>To:</h3>
                                </Segment>
                                <Segment.Group>
                                    <Segment>{to.name}</Segment>
                                    <Segment>{to.street}</Segment>
                                    <Segment>
                                        {to.city}
                                        {to.state}
                                        {to.zip}
                                    </Segment>
                                </Segment.Group>
                                <Segment.Group horizontal>
                                    <Segment><b>Weight: </b>{weight}</Segment>
                                    <Segment><b>Shipping Method: </b> {shippingOption === 1 ? 'Ground' : 'Priority'}</Segment>
                                    <Segment><b>Total Shipping Cost: $</b> {this.calculateShipping()}</Segment>
                                </Segment.Group>
                            </Segment.Group>
                        </div>
                        <div className='navigator-buttons'>
                            <Button onClick={this.createNewLabel}>Create New Label</Button>
                            <Button 
                                color='green' 
                                id='print-label' 
                                onClick={() => window.print()}>Print Label</Button>
                        </div>
                    </div>
                    :
                    <Wizard
                        header={<Header title='Label Maker'/>}
                        wizardContext={ShippingLabelWizardSchema}
                        steps={Steps}
                        onComplete={this.buildLabel} />
                }
            </div>
        )
    }
}
