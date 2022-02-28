import { render, fireEvent } from '@testing-library/react';

import Checkbox from '.';

const mockLabel = 'XL';
const mockHandleOnChange = jest.fn();

describe('[commons] - Checkbox', () => {
  const setup = () => {
    return render(
      <Checkbox label={mockLabel} handleOnChange={mockHandleOnChange} />
    );
  };

  test('should render correctly with label and a checkmark', () => {
    const { container, getByText } = setup();

    expect(getByText(mockLabel)).toBeInTheDocument();
    expect(container.querySelector('.checkmark')).toBeTruthy();
  });

  test('should toggle checked when clicked', () => {
    const { getByTestId } = setup();
    const checkbox = getByTestId('checkbox');

    expect(checkbox).not.toBeChecked();
    fireEvent.click(checkbox);
    expect(checkbox).toBeChecked();
    fireEvent.click(checkbox);
    expect(checkbox).not.toBeChecked();

    expect(mockHandleOnChange).toBeCalledTimes(2);
  });
});
