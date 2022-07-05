import { render, screen, cleanup } from '@testing-library/react';
import Element from '../Element';

afterEach(cleanup);

test("should not render if doesn't have functions", () => {
  const mockElement = <Element
    onRemoveElementHandler={() => {}}
    onUpdateElementHandler={() => {}}
  />

  expect(mockElement.props.onRemoveElementHandler).toBeTruthy();
  expect(mockElement.props.onUpdateElementHandler).toBeTruthy();
});

test("should render if element has all properties", () => {
  const mockElementValid = <Element element={{
    id: 1,
    name: "Elemento 1",
    html: "<button>Teste</button>",
    css: "color: red; text-decoration: underline;",
  }} />

  expect(mockElementValid.props.element).toBeTruthy();
  expect(mockElementValid.props.element.id).toBeTruthy();
  expect(mockElementValid.props.element.name).toBeTruthy();
  expect(mockElementValid.props.element.html).toBeTruthy();
  expect(mockElementValid.props.element.css).toBeTruthy();
});

test("should not render if doesn't have all properties", () => {
  const mockElementInvalid = <Element element={{}} />

  expect(mockElementInvalid.props.element.id).not.toBeTruthy();
  expect(mockElementInvalid.props.element.name).not.toBeTruthy();
  expect(mockElementInvalid.props.element.html).not.toBeTruthy();
  expect(mockElementInvalid.props.element.css).not.toBeTruthy();
});