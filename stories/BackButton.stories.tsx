import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import BackButton from "./BackButton";

export default {
  title: "Button/BackButton",
  component: BackButton,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof BackButton>;

export const Template: ComponentStory<typeof BackButton> = () => <BackButton />;
