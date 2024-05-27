import React from "react";
import TabsWrapper from "../components/Tabs/TabsWrapper";
import TabsList from "../components/Tabs/TabsList";
import Tab from "../components/Tabs/Tab";
import TabPanel from "../components/Tabs/TabPanel";

export default {
  title: "Components/TabPanel",
  component: TabPanel,
  argTypes: {
    fontSize: { control: "text" },
    color: { control: "color" },
  },
};

const Template = (args) => (
  <TabsWrapper defaultValue={"tab1"}>
    <TabPanel value="tab1" {...args}>
      Content for Tab 1
    </TabPanel>
  </TabsWrapper>
);

export const Default = Template.bind({});

Default.args = {
  fontSize: "16px",
  color: "#2d3748",
};
