/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import "./style.css";

export const Component = ({ property1, className }) => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "frame-108",
  });

  return (
    <div className={`component ${state.property1} ${className}`}>
      <div className="comprando-todo-en-el">
        {state.property1 === "frame-108" && <p className="text-wrapper-8">Comprando todo en el mismo supermercado</p>}

        {state.property1 === "frame-109" && <p className="text-wrapper-8">Dividiendo tus compras en supermercados</p>}
      </div>
      <div
        className="overlap-group-wrapper"
        onClick={() => {
          dispatch("click");
        }}
      >
        <div className="overlap-group">
          <div className="ellipse" />
        </div>
      </div>
      <div className="presiona-el-switch">
        {state.property1 === "frame-108" && (
          <p className="text-wrapper-8">
            Presiona el switch para ver los precios dividiendo la compra por supermercados
          </p>
        )}

        {state.property1 === "frame-109" && (
          <p className="text-wrapper-8">Presiona el switch para ver el precio de toda la compra en cada supermercado</p>
        )}
      </div>
    </div>
  );
};

function reducer(state, action) {
  if (state.property1 === "frame-108") {
    switch (action) {
      case "click":
        return {
          property1: "frame-109",
        };
    }
  }

  if (state.property1 === "frame-109") {
    switch (action) {
      case "click":
        return {
          property1: "frame-108",
        };
    }
  }

  return state;
}

Component.propTypes = {
  property1: PropTypes.oneOf(["frame-109", "frame-108"]),
};
