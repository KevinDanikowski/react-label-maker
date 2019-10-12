import React from 'react'
import PropTypes from 'prop-types';
import { Form, Radio } from 'semantic-ui-react';

export default function Confirm({wizardContext}) {
    return (
        <React.Fragment>
            <Form>
                <h2>Sender's Address:</h2>
                <Form.Group inline>
                    <label>Name</label>
                    <Form.Input readOnly fluid 
                        placeholder='Name' 
                        width={16} 
                        value={wizardContext.from.name} />
                </Form.Group>
                <Form.Group inline>
                    <label>Street</label>
                    <Form.Input readOnly fluid 
                    placeholder='Street' 
                    width={16} 
                    value={wizardContext.from.street} />
                </Form.Group>
                <Form.Group inline>
                    <label>City</label>
                    <Form.Input readOnly fluid 
                        placeholder='City' 
                        width={6} 
                        value={wizardContext.from.city} />
                    <label>State</label>
                    <Form.Input readOnly fluid 
                        placeholder='State' 
                        width={4} 
                    value={wizardContext.from.state} />
                    <label>Zip</label>
                    <Form.Input readOnly fluid 
                        placeholder='Zip Code' 
                        width={6} 
                        value={wizardContext.from.zip} />
                </Form.Group>
            </Form>
            <Form>
                <h2>Receiver's Address:</h2>
                <Form.Group inline>
                    <label>Name</label>
                    <Form.Input readOnly fluid 
                        placeholder='Name' 
                        width={16} 
                        value={wizardContext.to.name} />
                </Form.Group>
                <Form.Group inline>
                    <label>Street</label>
                    <Form.Input readOnly fluid 
                        placeholder='Street' 
                        width={16} 
                        value={wizardContext.to.street} />
                </Form.Group>
                <Form.Group inline>
                    <label>City</label>
                    <Form.Input readOnly fluid placeholder='City' width={6} value={wizardContext.to.city} />
                    <label>State</label>
                    <Form.Input readOnly fluid placeholder='State' width={4} value={wizardContext.to.state} />
                    <label>Zip</label>
                    <Form.Input readOnly fluid placeholder='Zip Code' width={6} value={wizardContext.to.zip} />
                </Form.Group>
            </Form>
            <Form>
                <h2>Weight:</h2>
                <Form.Group inline>
                    <label>Weight</label>
                    <Form.Input readOnly fluid 
                    placeholder='Weight' 
                    width={16} 
                    value={wizardContext.weight} />
                </Form.Group>
            </Form>
            <Form>
                <Form.Field>
                    <h2>Selected Shipping Option: </h2>
                </Form.Field>
                <Form.Field>
                    <Radio
                        readOnly
                        label='Ground'
                        name='radioGroup'
                        value={1}
                        checked={wizardContext.shippingOption === 1}
                    />
                </Form.Field>
                <Form.Field>
                    <Radio
                        readOnly
                        label='Priority'
                        name='radioGroup'
                        value={2}
                        checked={wizardContext.shippingOption === 2}
                    />
                </Form.Field>
            </Form>
        </React.Fragment>
    )
}

Confirm.propTypes = {
    wizardContext: PropTypes.object,
}