import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import Home from '../Home';

afterEach(cleanup);

test("should element count increase when add button event triggered", () => {
  render(<Home />);

  const elementsLength = screen.getByTestId("elements-wrapper-test").childElementCount;
  const addElementButton = screen.getByTestId("add-button-test");

  // Simulates an element adititon
  fireEvent.click(addElementButton);

  const newElementsLength = screen.getByTestId("elements-wrapper-test").childElementCount;
  expect(newElementsLength).toBeGreaterThan(elementsLength);
})

test("should element count decrease when remove button event triggered", () => {
  const wrapper = render(<Home />);

  // const wrapper = render(<Home />);
  // TODO: Test the wrapper, and not the screen.

  // Simulates an element adititon
  const addButton = wrapper.getByTestId("add-button-test");
  fireEvent.click(addButton);

  // Get count of elements after adding an element
  const elementsLength = wrapper.getByTestId("elements-wrapper-test").childElementCount;

  // Get delete button of first element
  const firstElement = wrapper.getByTestId("elements-wrapper-test").firstChild.id;
  const firstElementDeleteButton = wrapper.getByTestId(`delete-button-test-${firstElement}`);
  fireEvent.click(firstElementDeleteButton);

  // Get count of elements after removing one element
  const newElementsLength = wrapper.getByTestId("elements-wrapper-test").childElementCount;

  expect(newElementsLength).toBeLessThan(elementsLength);
})