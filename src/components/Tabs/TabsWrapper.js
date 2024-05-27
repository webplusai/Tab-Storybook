import React from "react";
import * as RadixTabs from "@radix-ui/react-tabs";
import "../../css/Tabs/TabsWrapper.css";

const TabsWrapper = ({ children, defaultValue }) => (
  <RadixTabs.Root defaultValue={defaultValue} className="radix-TabsRoot">
    {children}
  </RadixTabs.Root>
);

export default TabsWrapper;
