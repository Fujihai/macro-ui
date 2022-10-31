import React from "react";
import Button, { ButtonProps } from "./Button";
import { Story, Meta } from "@storybook/react/types-6-0";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Button",
  component: Button,
} as Meta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: Story<typeof Button> = (args: ButtonProps) => <Button>Hello World!</Button>;

export const Usage = Template.bind({});