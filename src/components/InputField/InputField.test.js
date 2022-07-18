import { render, fireEvent } from '@testing-library/react';
import { InputField } from './InputField';

test('Input Field renders correctly', () => {
    const {queryByTestId, queryByPlaceholderText} = render(<InputField />);

    expect(queryByTestId('click-button')).toBeTruthy();
    expect(queryByPlaceholderText('Insert Text Here')).toBeTruthy();
});

test('Update input field value', () => {
    const {queryByPlaceholderText} = render(<InputField />);
    const inputValue = queryByPlaceholderText('Insert Text Here');

    fireEvent.change(inputValue, {target: {value: "test"}});

    expect(inputValue.value).toBe("test");
});

test('should not call function on button click', () => {
    const handleOnClick = jest.fn();
    const {queryByTestId} = render(<InputField wasClicked={handleOnClick}/>);

    fireEvent.click(queryByTestId('click-button'));
    expect(handleOnClick).not.toBeCalled();
});

test('should call function on button click', () => {
    const handleOnClick = jest.fn();
    const {queryByTestId, queryByPlaceholderText} = render(<InputField wasClicked={handleOnClick}/>);
    const inputValue = queryByPlaceholderText('Insert Text Here');

    fireEvent.change(inputValue, {target: {value: "test"}});
    fireEvent.click(queryByTestId('click-button'));
    
    expect(handleOnClick).toBeCalled();
});
