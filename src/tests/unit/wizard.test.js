import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Wizard from '../../core/wizard';
import Header from '../../core/Header';

Enzyme.configure({ adapter: new Adapter() });

describe('<Wizard />', () => {
    let wrapper;
    const sampleContext = {
        to: {
            name: ''
        },
        from: {
            name: ''
        }
    }
    const SampleStep = () => (<div>step</div>);
    const props = {
        header: <Header title='sample title'/>,
        steps: [<SampleStep />, <SampleStep />],
        wizardContext: sampleContext,
        onComplete: jest.fn(),
    };

    beforeEach(() => {
        wrapper = shallow(<Wizard {...props} />);
    });

    it('renders', function () {
        expect(wrapper.length).toEqual(1);
    })
    it('starts at step 1 and progresses forward and back', () => {
        expect(wrapper.state('stepIndex')).toEqual(0);
        wrapper.instance().nextStep();
        expect(wrapper.state('stepIndex')).toEqual(1);
        wrapper.instance().previousStep();
        expect(wrapper.state('stepIndex')).toEqual(0);
    });
    it('fills out data correctly', () => {
        wrapper.instance().onAction('brian', 'to.name');
        wrapper.instance().onAction('tom', 'from.name');
        expect(wrapper.state('wizardContext').to.name).toEqual('brian');
        expect(wrapper.state('wizardContext').from.name).toEqual('tom');
    });
    it('shows next button when validated', () => {
        wrapper.instance().onAction('brian', 'to.name', true);
        expect(wrapper.state('nextButtonDisabled')).toEqual(false);
    });
    it('calls onComplete at the end', () => {
        wrapper.instance().onAction('brian', 'to.name');
        wrapper.instance().onAction('tom', 'from.name');
        wrapper.instance().completeForm();
        expect(props.onComplete).toBeCalled();
    });
});