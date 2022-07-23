import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Body from "./Body";

export default {
  title: "Body",
  component: Body,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof Body>;

export const Template: ComponentStory<typeof Body> = () => <Body />;
