import { render, fireEvent, screen } from '@testing-library/react';
import { Button } from './Button'

  test('Button renders correctly', () => {
    const {queryByTestId} = render(<Button/>);
    expect(queryByTestId('click-button')).toBeTruthy();
});

test('Button click', () => {
  const handleOnClick = jest.fn();
  const {queryByTestId} = render(<Button handleOnClick={handleOnClick}/>);
  
  fireEvent.click(queryByTestId('click-button'));
  expect(handleOnClick).toBeCalled();
});

test("render corect whit prooper classes", ()=>{
  const {queryByTestId} = render(<Button buttonSize="button--large"/>);
    expect(queryByTestId('click-button')).toHaveClass('button--large');
})
