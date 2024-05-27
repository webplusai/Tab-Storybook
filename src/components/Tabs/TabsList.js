import React from "react";
import * as RadixTabs from "@radix-ui/react-tabs";
import "../../css/Tabs/TabsList.css";

const TabsList = ({ children }) => (
  <RadixTabs.List className="radix-TabsList">{children}</RadixTabs.List>
);

export default TabsList;
