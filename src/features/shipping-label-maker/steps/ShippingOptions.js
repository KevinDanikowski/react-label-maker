import React from 'react'
import PropTypes from 'prop-types';
import { Form, Radio } from 'semantic-ui-react'

export default function ShippingOption(props) {
    return (
        <Form>
            <Form.Field>
                <h2>Selected Shipping Option:</h2>
            </Form.Field>
            <Form.Field>
                <Radio
                    label='Ground'
                    name='radioGroup'
                    value={1}
                    checked={props.wizardContext.shippingOption === 1}
                    onChange={() => props.onAction(1, 'shippingOption', true)}
                />
            </Form.Field>
            <Form.Field>
                <Radio
                    label='Priority'
                    name='radioGroup'
                    value={2}
                    checked={props.wizardContext.shippingOption === 2}
                    onChange={() => props.onAction(2, 'shippingOption', true)}
                />
            </Form.Field>
        </Form>
    )
}

ShippingOption.propTypes = {
    wizardContext: PropTypes.object,
    onAction: PropTypes.func
}