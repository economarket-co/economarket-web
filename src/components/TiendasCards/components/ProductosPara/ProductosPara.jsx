/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const ProductosPara = ({
  className,
  frameClassName,
  frameClassNameOverride,
  divClassName,
  divClassNameOverride,
  text = "Nombre del producto",
  frameClassName1,
  divClassName1,
  text1 = "#",
}) => {
  return (
    <div className={`productos-para ${className}`}>
      <div className="div">
        <div className={`frame-2 ${frameClassName}`}>
          <div className={`frame-3 ${frameClassNameOverride}`} />
          <div className={`nombre-del-producto-wrapper ${divClassName}`}>
            <div className={`text-wrapper ${divClassNameOverride}`}>{text}</div>
          </div>
        </div>
        <div className={`frame-4 ${frameClassName1}`}>
          <div className={`text-wrapper ${divClassName1}`}>{text1}</div>
        </div>
      </div>
    </div>
  );
};

ProductosPara.propTypes = {
  text: PropTypes.string,
  text1: PropTypes.string,
};
