import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../../App';
import ShippingLabelMaker from '../../features/shipping-label-maker'

Enzyme.configure({ adapter: new Adapter() });

describe('<App />', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = mount(<App />);
    });

    it('renders', function () {
        expect(wrapper.length).toEqual(1);
    })
    it('logs in properly', () => {
        expect(wrapper.state('isLoggedIn')).toEqual(false);
        expect(wrapper.find(ShippingLabelMaker).length === 0);
        wrapper.instance().handleLogin();
        expect(wrapper.state('isLoggedIn')).toEqual(true);
        expect(wrapper.find(ShippingLabelMaker).length === 1);
        wrapper.instance().handleLogout();
        expect(wrapper.state('isLoggedIn')).toEqual(false);
        expect(wrapper.find(ShippingLabelMaker).length === 0);
    });
});