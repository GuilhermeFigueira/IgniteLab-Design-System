import { Meta, StoryObj } from "@storybook/react";
import { ButtonProps, Button } from "./Button";

export default {
	title: "Components/Button",
	component: Button,
	args: {
		children: "Create a account",
	},
	argTypes: {},
} as Meta<ButtonProps>;

export const Default: StoryObj<ButtonProps> = {};
