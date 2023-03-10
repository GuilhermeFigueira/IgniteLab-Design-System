import { Meta, StoryObj } from "@storybook/react";
import { HeadingProps, Heading } from "./Heading";

export default {
	title: "Components/Heading",
	component: Heading,
	args: {
		children: "Lorem ipsum ",
		size: "md",
	},
	argTypes: {
		size: {
			options: ["sm", "lg", "md"],
			control: {
				type: "inline-radio",
			},
		},
	},
} as Meta<HeadingProps>;

export const Small: StoryObj<HeadingProps> = {
	args: {
		size: "sm",
	},
};

export const Medium: StoryObj<HeadingProps> = {};

export const Large: StoryObj<HeadingProps> = {
	args: {
		size: "lg",
	},
};

export const CustomComponent: StoryObj<HeadingProps> = {
	args: {
		asChild: true,
		children: <h1>Heading with h1</h1>,
	},
	argTypes: {
		children: {
			table: {
				disable: true,
			},
		},
		asChild: {
			table: {
				disable: true,
			},
		},
	},
};
