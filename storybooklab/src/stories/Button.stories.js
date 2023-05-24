import Button from "../components/Button";

export default {
  title: "Button",
  component: Button,
  argTypes: { handleClick: {action: "handleClick"}}
};

const Template = args => <Button {...args} />;

export const ExampleButton = Template.bind({});
ExampleButton.args = {
  label: "button",
  backgroundColor: "purple",
  size: "lg",
};
