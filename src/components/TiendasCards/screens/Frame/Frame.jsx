import React from "react";
import { Component } from "../../components/Component";
import { ProductosPara } from "../../components/ProductosPara";
import "./style.css";

export const Frame = () => {
  return (
    <div className="frame">
      <div className="div-2">
        <div className="div-3">
          <div className="text-wrapper-2">Opción más económica</div>
          <img className="icon-star" alt="Icon star" src="../../../static/img/icon-star.png" />
        </div>
        <div className="image-wrapper">
          <img className="image" alt="Image" src="../../../static/img/icon-star.png" />
        </div>
        <div className="div-4">
          <ProductosPara
            className="productos-para-comparar"
            divClassName="design-component-instance-node"
            divClassName1="productos-para-2"
            divClassNameOverride="productos-para-2"
            frameClassName="productos-para-instance"
            frameClassName1="productos-para-3"
            frameClassNameOverride="productos-para-comparar-instance"
            text="Aguacate"
            text1="3"
          />
          <ProductosPara
            className="productos-para-comparar"
            divClassName="design-component-instance-node"
            divClassName1="productos-para-2"
            divClassNameOverride="productos-para-2"
            frameClassName="productos-para-instance"
            frameClassName1="productos-para-3"
            frameClassNameOverride="productos-para-4"
            text="Pera"
            text1="2"
          />
          <ProductosPara
            className="productos-para-comparar"
            divClassName="design-component-instance-node"
            divClassName1="productos-para-2"
            divClassNameOverride="productos-para-2"
            frameClassName="productos-para-instance"
            frameClassName1="productos-para-3"
            frameClassNameOverride="productos-para-5"
            text="Banano"
            text1="6"
          />
          <ProductosPara
            className="productos-para-comparar"
            divClassName="design-component-instance-node"
            divClassName1="productos-para-2"
            divClassNameOverride="productos-para-2"
            frameClassName="productos-para-instance"
            frameClassName1="productos-para-3"
            frameClassNameOverride="productos-para-6"
            text="Manzana"
            text1="5"
          />
          <ProductosPara
            className="productos-para-comparar"
            divClassName="design-component-instance-node"
            divClassName1="productos-para-2"
            divClassNameOverride="productos-para-2"
            frameClassName="productos-para-instance"
            frameClassName1="productos-para-3"
            frameClassNameOverride="productos-para-7"
            text="Brócoli"
            text1="2"
          />
          <ProductosPara
            className="productos-para-comparar"
            divClassName="design-component-instance-node"
            divClassName1="productos-para-2"
            divClassNameOverride="productos-para-2"
            frameClassName="productos-para-instance"
            frameClassName1="productos-para-3"
            frameClassNameOverride="productos-para-8"
            text="Uvas"
            text1="7"
          />
        </div>
        <p className="p">6 productos de tu lista</p>
        <div className="presiona-el-switch-wrapper">
          <div className="presiona-el-switch-2">Compra la lista</div>
        </div>
        <div className="text-wrapper-3">70.000 COP</div>
        <img className="line" alt="Line" src="/img/line-17.svg" />
      </div>
      <div className="div-5">
        <div className="img-wrapper">
          <img className="img" alt="Image" src="../../../static/img/image-11.png" />
        </div>
        <div className="overlap-group-2">
          <div className="div-6">
            <ProductosPara
              className="productos-para-comparar"
              divClassName="design-component-instance-node"
              divClassName1="productos-para-2"
              divClassNameOverride="productos-para-2"
              frameClassName="productos-para-instance"
              frameClassName1="productos-para-3"
              frameClassNameOverride="productos-para-comparar-instance"
              text="Aguacate"
              text1="3"
            />
            <ProductosPara
              className="productos-para-comparar"
              divClassName="design-component-instance-node"
              divClassName1="productos-para-2"
              divClassNameOverride="productos-para-2"
              frameClassName="productos-para-instance"
              frameClassName1="productos-para-3"
              frameClassNameOverride="productos-para-4"
              text="Pera"
              text1="2"
            />
            <ProductosPara
              className="productos-para-comparar"
              divClassName="design-component-instance-node"
              divClassName1="productos-para-2"
              divClassNameOverride="productos-para-2"
              frameClassName="productos-para-instance"
              frameClassName1="productos-para-3"
              frameClassNameOverride="productos-para-5"
              text="Banano"
              text1="6"
            />
            <div className="div-7">
              <ProductosPara
                className="productos-para-comparar"
                divClassName="design-component-instance-node"
                divClassName1="productos-para-2"
                divClassNameOverride="productos-para-9"
                frameClassName="productos-para-instance"
                frameClassName1="productos-para-3"
                frameClassNameOverride="productos-para-6"
                text="Manzana"
                text1="5"
              />
              <p className="presiona-el-switch-3">
                La referencia de este producto es distinta en este supermercado. Puedes eliminarla desde tu carrito
              </p>
            </div>
            <ProductosPara
              className="productos-para-comparar"
              divClassName="design-component-instance-node"
              divClassName1="productos-para-2"
              divClassNameOverride="productos-para-2"
              frameClassName="productos-para-instance"
              frameClassName1="productos-para-3"
              frameClassNameOverride="productos-para-7"
              text="Brócoli"
              text1="2"
            />
            <ProductosPara
              className="productos-para-comparar"
              divClassName="design-component-instance-node"
              divClassName1="productos-para-2"
              divClassNameOverride="productos-para-2"
              frameClassName="productos-para-instance"
              frameClassName1="productos-para-3"
              frameClassNameOverride="productos-para-8"
              text="Uvas"
              text1="7"
            />
          </div>
          <img className="error" alt="Error" src="/img/error.png" />
        </div>
        <p className="presiona-el-switch-4">6 productos de tu lista</p>
        <div className="text-wrapper-4">82.000 COP</div>
        <img className="line-2" alt="Line" src="/img/line-17.svg" />
        <div className="div-wrapper">
          <div className="presiona-el-switch-2">Compra la lista</div>
        </div>
      </div>
      <div className="overlap">
        <div className="div-8">
          <div className="image-wrapper-2">
            <img className="image-2" alt="Image" src="../../../static/img/image-12-1.png" />
          </div>
          <div className="div-9">
            <ProductosPara
              className="productos-para-comparar"
              divClassName="design-component-instance-node"
              divClassName1="productos-para-2"
              divClassNameOverride="productos-para-2"
              frameClassName="productos-para-instance"
              frameClassName1="productos-para-3"
              frameClassNameOverride="productos-para-comparar-instance"
              text="Aguacate"
              text1="3"
            />
            <ProductosPara
              className="productos-para-comparar"
              divClassName="design-component-instance-node"
              divClassName1="productos-para-9"
              divClassNameOverride="productos-para-10"
              frameClassName="productos-para-instance"
              frameClassName1="productos-para-3"
              frameClassNameOverride="productos-para-4"
              text="Pera"
              text1="0"
            />
            <ProductosPara
              className="productos-para-comparar"
              divClassName="design-component-instance-node"
              divClassName1="productos-para-2"
              divClassNameOverride="productos-para-2"
              frameClassName="productos-para-instance"
              frameClassName1="productos-para-3"
              frameClassNameOverride="productos-para-5"
              text="Banano"
              text1="6"
            />
            <ProductosPara
              className="productos-para-comparar"
              divClassName="design-component-instance-node"
              divClassName1="productos-para-2"
              divClassNameOverride="productos-para-2"
              frameClassName="productos-para-instance"
              frameClassName1="productos-para-3"
              frameClassNameOverride="productos-para-6"
              text="Manzana"
              text1="5"
            />
            <ProductosPara
              className="productos-para-comparar"
              divClassName="design-component-instance-node"
              divClassName1="productos-para-2"
              divClassNameOverride="productos-para-2"
              frameClassName="productos-para-instance"
              frameClassName1="productos-para-3"
              frameClassNameOverride="productos-para-7"
              text="Brócoli"
              text1="2"
            />
            <ProductosPara
              className="productos-para-comparar"
              divClassName="design-component-instance-node"
              divClassName1="productos-para-2"
              divClassNameOverride="productos-para-2"
              frameClassName="productos-para-instance"
              frameClassName1="productos-para-3"
              frameClassNameOverride="productos-para-8"
              text="Uvas"
              text1="7"
            />
          </div>
          <p className="presiona-el-switch-4">5 productos de tu lista</p>
          <div className="text-wrapper-5">83.000 COP</div>
          <img className="line-2" alt="Line" src="../../../static/img/line-17.svg" />
          <div className="div-wrapper">
            <div className="presiona-el-switch-2">Compra la lista</div>
          </div>
        </div>
        <img className="error-2" alt="Error" src="/img/error.png" />
      </div>
      <div className="div-10">
        <div className="image-wrapper-3">
          <img className="image-3" alt="Image" src="../../../static/img/image-12.png" />
        </div>
        <div className="div-11">
          <ProductosPara
            className="productos-para-comparar"
            divClassName="design-component-instance-node"
            divClassName1="productos-para-2"
            divClassNameOverride="productos-para-2"
            frameClassName="productos-para-instance"
            frameClassName1="productos-para-3"
            frameClassNameOverride="productos-para-comparar-instance"
            text="Aguacate"
            text1="3"
          />
          <ProductosPara
            className="productos-para-comparar"
            divClassName="design-component-instance-node"
            divClassName1="productos-para-2"
            divClassNameOverride="productos-para-2"
            frameClassName="productos-para-instance"
            frameClassName1="productos-para-3"
            frameClassNameOverride="productos-para-4"
            text="Pera"
            text1="2"
          />
          <ProductosPara
            className="productos-para-comparar"
            divClassName="design-component-instance-node"
            divClassName1="productos-para-2"
            divClassNameOverride="productos-para-2"
            frameClassName="productos-para-instance"
            frameClassName1="productos-para-3"
            frameClassNameOverride="productos-para-5"
            text="Banano"
            text1="6"
          />
          <ProductosPara
            className="productos-para-comparar"
            divClassName="design-component-instance-node"
            divClassName1="productos-para-2"
            divClassNameOverride="productos-para-2"
            frameClassName="productos-para-instance"
            frameClassName1="productos-para-3"
            frameClassNameOverride="productos-para-6"
            text="Manzana"
            text1="5"
          />
          <ProductosPara
            className="productos-para-comparar"
            divClassName="design-component-instance-node"
            divClassName1="productos-para-2"
            divClassNameOverride="productos-para-2"
            frameClassName="productos-para-instance"
            frameClassName1="productos-para-3"
            frameClassNameOverride="productos-para-7"
            text="Brócoli"
            text1="2"
          />
          <ProductosPara
            className="productos-para-comparar"
            divClassName="design-component-instance-node"
            divClassName1="productos-para-2"
            divClassNameOverride="productos-para-2"
            frameClassName="productos-para-instance"
            frameClassName1="productos-para-3"
            frameClassNameOverride="productos-para-8"
            text="Uvas"
            text1="7"
          />
        </div>
        <p className="presiona-el-switch-5">6 productos de tu lista</p>
        <div className="text-wrapper-6">90.000 COP</div>
        <img className="line-3" alt="Line" src="/img/line-17.svg" />
        <div className="presiona-el-switch-wrapper-2">
          <div className="presiona-el-switch-2">Compra la lista</div>
        </div>
      </div>
      <div className="text-wrapper-7">Compara los precios</div>
      <Component className="component-14" property1="frame-108" />
    </div>
  );
};
