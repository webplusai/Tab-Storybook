import React from "react";
import TabsWrapper from "../components/Tabs/TabsWrapper";
import TabsList from "../components/Tabs/TabsList";
import Tab from "../components/Tabs/Tab";

export default {
  title: "Components/Tab",
  component: Tab,
  argTypes: {
    value: { control: { disable: true } },
    children: { control: { disable: true } },
    color: { control: "color" },
    backgroundColor: { control: "color" },
    activeColor: { control: "color" },
    activeBackgroundColor: { control: "color" },
    disableColor: { control: "color" },
    disableBackgroundColor: { control: "color" },
    selected: { control: { disable: true } },
    disabled: { control: { disable: true } },
  },
};
const Template = (args) => (
  <TabsWrapper defaultValue="tab1">
    <TabsList>
      <Tab value="tab1" {...args}>
        Tab 1
      </Tab>
    </TabsList>
  </TabsWrapper>
);

export const Default = Template.bind({});
Default.args = {
  color: "#4a5568",
  backgroundColor: "transparent",
  selected: false,
};

export const Selected = Template.bind({});
Selected.args = {
  activeColor: "#3182ce",
  activeBackgroundColor: "#edf2f7",
  selected: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  disableColor: "#cbd5e0",
  disableBackgroundColor: "#e2e8f0",
  disabled: true,
};
