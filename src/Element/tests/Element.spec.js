import { render, screen } from '@testing-library/react';
import Element from '../Element';

test('should render component if it does not have properties', () => {
  render(<Element />);

  expect(screen.Element).toBeInTheDocument().toBeFalsy();
});
