import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import Element from '../Element';

afterEach(cleanup);

test("should not render if doesn't have functions", () => {
  // const element = <Element
  //   onRemoveElementHandler={() => {}}
  //   onUpdateElementHandler={() => {}}
  // />

  // expect(element.props.onRemoveElementHandler).toBeTruthy();
  // expect(element.props.onUpdateElementHandler).toBeTruthy();
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

test("should element name change", () => {
  let updateWasTriggered = false;

  const mockElementValid = (
    <Element
      element={{
        id: 1,
        name: "Elemento 1",
        html: "<button>Teste</button>",
        css: "color: red; text-decoration: underline;",
      }}
      onUpdateElementHandler={() => updateWasTriggered = true }
    />
  );

  const wrapper = render(mockElementValid);

  const nameInput = wrapper.getByTestId("input-name-test-1");

  fireEvent.change(nameInput, { target: { value: "Elemento 1 EDITADO !!!" }});

  expect(updateWasTriggered).toBeTruthy();
});