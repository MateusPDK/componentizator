import React, { useState } from "react";

import { v4 as uuidv4 } from 'uuid';

import Element from "../Element/Element";
import ButtonPlus from "./components/ButtonPlus";

import './home.scss';

const Home = () => {
  const [elements, setElements] = useState([{
    id: uuidv4(),
    name: "",
    html: "<button>Teste</button>",
    css: "color: red; text-decoration: underline;",
  }]);

  const printObj = str => (
    <pre>{ JSON.stringify(str, 0, 2) }</pre>
  );

  const addElementHandler = () => {
    setElements([
      ...elements,
      {
        id: uuidv4(),
        name: "",
        html: "",
        css: "",
      },
    ]);
  };

  const onRemoveElementHandler = id => {
    const filteredElements = elements.filter(elem => elem.id !== id);
    setElements(filteredElements);
  };

  const onUpdateElementHandler = newElement => {
    const updatedElements = elements.map(oldElement => {
      if (oldElement.id === newElement.id) {
        return newElement;
      }

      return oldElement;
    });

    setElements(updatedElements);
  };

  const renderElementsHandler = () => {
    return elements.map((element, i) => (
      <Element
        key={element.id}
        index={i + 1}
        element={element}
        onRemoveElementHandler={onRemoveElementHandler}
        onUpdateElementHandler={onUpdateElementHandler}
        data-testid={`element-test-${element.id}`}
      />
    ))
  };

  return (
    <div id="home-view">
      <div className="container">
        <div className="flex column gap_24">
          <div className="flex align_end gap_16">
            <h1 className="title emerald">Componentizator</h1>

            <p className="lavander">Por: Mateus Podgorski</p>
          </div>
        </div>
      </div>

      <div className="flex column my32" data-testid="elements-wrapper-test">
        {
          elements.length > 0 ?
          renderElementsHandler() :
          <div className="container"><p>Listagem vazia,<br/><br/> Comece a adicionar seus elementos!</p></div>
        }
      </div>


      <div className="container flex justify_end">
        <ButtonPlus onclick={addElementHandler} />
      </div>

      <div className="container">
        <div className="data-preview">
          { printObj(elements) }
        </div>
      </div>
    </div>
  );
};

export default Home;