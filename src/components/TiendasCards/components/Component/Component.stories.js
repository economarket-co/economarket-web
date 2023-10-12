import { Component } from ".";

export default {
  title: "Components/Component",
  component: Component,
  argTypes: {
    property1: {
      options: ["frame-109", "frame-108"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "frame-109",
    className: {},
  },
};
