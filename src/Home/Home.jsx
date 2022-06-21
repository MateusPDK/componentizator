import React from "react";

import Element from "../Element/Element";
import ButtonPlus from "./Components/ButtonPlus";

import './home.scss';

const Home = () => {
  // TODO CODE HERE...

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

      <div className="flex column my32">
        <Element />
        <Element />
        <Element />
        <Element />
        <Element />
      </div>


      <div className="container flex justify_end">
        <ButtonPlus />
      </div>
    </div>
  );
};

export default Home;