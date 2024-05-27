import React from "react";
import PropTypes from "prop-types";
import * as RadixTabs from "@radix-ui/react-tabs";
import "../../css/Tabs/TabPanel.css";

const TabPanel = ({ value, children, fontSize, color }) => {
  const customStyles = {
    "--font-size": fontSize,
    "--color": color,
  };

  return (
    <RadixTabs.Content
      className="radix-TabsContent"
      value={value}
      style={customStyles}
    >
      {children}
    </RadixTabs.Content>
  );
};

TabPanel.propTypes = {
  value: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  fontSize: PropTypes.string,
  color: PropTypes.string,
};

TabPanel.defaultProps = {
  fontSize: "16px",
  color: "#2d3748",
};

export default TabPanel;
