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
        let datePickerWithSelectedDate
        beforeAll(() => {
            datePicker.props().onDateClicked(selectedDate);
            datePickerWithSelectedDate = wrapper.find('DatePicker')
        })

        it('pass this selected date to the datePicker', () => {
            expect(datePickerWithSelectedDate.props().selectedDate).toEqual(selectedDate)
        })

        describe('and click on apply button', () => {

            beforeAll(() => {
                datePickerWithSelectedDate.props().onApply();
            })

            it('show the selected date', () => {
                const selectedDateElement = wrapper.find('.applied-date')
                expect(selectedDateElement.text()).toEqual("20/8/2019")
            })
        })
    })
})