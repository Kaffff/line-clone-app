import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import InputBar from "./InputBar";

export default {
  title: "InputBar",
  component: InputBar,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof InputBar>;

export const Template: ComponentStory<typeof InputBar> = () => <InputBar />;
