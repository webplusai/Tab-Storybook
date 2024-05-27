import React from "react";
import TabsWrapper from "../components/Tabs/TabsWrapper";
import TabsList from "../components/Tabs/TabsList";
import Tab from "../components/Tabs/Tab";
import TabPanel from "../components/Tabs/TabPanel";

export default {
  title: "Components/TabsWrapper",
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

  const tabPanels = Array.from({ length: tabCount }, (_, index) => (
    <TabPanel key={`panel${index + 1}`} value={`tab${index + 1}`}>
      {`Content for Tab ${index + 1}`}
    </TabPanel>
  ));

  return (
    <TabsWrapper defaultValue="tab1">
      <TabsList>{tabs}</TabsList>
      {tabPanels}
    </TabsWrapper>
  );
};

export const Default = Template.bind({});

Default.args = {
  tabCount: 2,
};
