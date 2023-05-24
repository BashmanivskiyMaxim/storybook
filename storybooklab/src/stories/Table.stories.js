import Table from "../components/Table";

export default {
  title: "Table",
  component: Table,
};

const Template = args => <Table {...args} />;

export const ExampleTable = Template.bind({});
ExampleTable.args = {
  color: "purple",
  border: "solid 1px gray",
};

export const ExampleTableBorder = Template.bind({});
ExampleTableBorder.args = {
  color: "black",
  border: "solid 10px gray",
};