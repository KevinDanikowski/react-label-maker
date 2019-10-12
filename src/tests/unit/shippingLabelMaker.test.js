import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ShippingLabelMaker from '../../features/shipping-label-maker';
import ShippingLabelWizardSchema from '../../features/shipping-label-maker/ShippingLabelWizardSchema';

Enzyme.configure({ adapter: new Adapter() });

describe.only('<ShippingLabelMaker />', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<ShippingLabelMaker />);
    });

    it('renders', function () {
        expect(wrapper.length).toEqual(1);
    })
    it('shows label on form complete', () => {
        wrapper.instance().buildLabel(ShippingLabelWizardSchema);
        expect(wrapper.state('formComplete')).toEqual(true);
    });
});