import { cleanup, render, screen } from '@testing-library/react';
import Element from '../Element';

afterEach(cleanup)

test("should delete button be disabled when there's no delete function", () => {
  const wrapper = render(<Element />);

  expect(wrapper.getByRole("button")).toBeDisabled();
});

// test('should delete when there is no delete function', () => {
//   render(<Element />);
//   // expect(screen.getByTestId('add-word-input')).toBeInTheDocument();
//   expect(screen.getByTestId('button-delete')).toBeDisabled();
// })

// test('should render component if it does not have properties', () => {
//   const wrapper = render(<Element />);

//   // expect(screen.Element).toBeInTheDocument().toBeFalsy();
//   // expect(screen.Element.props())
//   // expect(Element).toHaveBeenCalledWith(
//   //   expect.objectContaining({
//   //     open: true,
//   //     data: "some data",
//   //   })
//   // );

//   // expect(elementMock).toHaveBeenCalledWith(
//   //   expect.objectContaining({
//   //     element: Object,
//   //     onRemoveElementHandler: Function,
//   //     onUpdateElementHandler: Function,
//   //   }),
//   // );

//   expect(wrapper.instance().props.element).toBeFalsy();
// });
