import React from 'react';
import Calendar from './Calendar';
import { shallow } from 'enzyme';

const props = {};
const setup = (anotherProps = {}) => {
    const newProps = {
        ...props,
        ...anotherProps,
    };
    const wrapper = shallow(<Calendar {...newProps} />);
    return {
        wrapper,
        datePicker: wrapper.find('DatePicker')
    };
};

const createDate = (day, month, year) => ({ day, month, year })

describe('Calendar', () => {
    describe('when select a date', () => {
        const { wrapper, datePicker } = setup();
        const selectedDate = createDate(20, 8, 2019)
        beforeAll(() => {
            datePicker.props().onDateClicked(selectedDate);
        })
        it('pass this selected date to the datePicker', () => {
            const datePickerWithSelectedDate = wrapper.find('DatePicker')
            expect(datePickerWithSelectedDate.props().selectedDate).toEqual(selectedDate)
        })
    })
})