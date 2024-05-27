import React from "react";
import TabsWrapper from "../components/Tabs/TabsWrapper";
import TabsList from "../components/Tabs/TabsList";
import Tab from "../components/Tabs/Tab";

export default {
  title: "Components/TabsList",
  component: TabsList,
  argTypes: {
    tabCount: { control: "number" },
  },
};

const Template = ({ tabCount }) => {
  const tabs = Array.from({ length: tabCount }, (_, index) => (
    <Tab key={`tab${index + 1}`} value={`tab${index + 1}`}>
      {`Tab ${index + 1}`}
    </Tab>
  ));

  return (
    <TabsWrapper defaultValue="tab1">
      <TabsList>{tabs}</TabsList>
    </TabsWrapper>
  );
};

export const Default = Template.bind({});

Default.args = {
  tabCount: 2,
};
