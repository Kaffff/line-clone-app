import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Header from "./Header";

export default {
  title: "Header",
  component: Header,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof Header>;

export const Template: ComponentStory<typeof Header> = () => <Header />;
