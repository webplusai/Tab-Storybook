import React from "react";
import PropTypes from "prop-types";
import * as RadixTabs from "@radix-ui/react-tabs";
import "../../css/Tabs/Tab.css";

const Tab = ({
  value,
  children,
  color,
  backgroundColor,
  activeColor,
  activeBackgroundColor,
  disableColor,
  disableBackgroundColor,
  disabled,
  selected,
}) => {
  const customStyles = {
    "--color": color,
    "--background-color": backgroundColor,
    "--active-background-color": activeBackgroundColor,
    "--active-color": activeColor,
    "--disable-background-color": disableBackgroundColor,
    "--disable-color": disableColor,
  };

  return (
    <RadixTabs.Trigger
      className="radix-TabsTrigger"
      value={value}
      style={customStyles}
      disabled={disabled}
      {...(selected !== undefined
        ? { "data-state": selected ? "active" : "inactive" }
        : {})}
    >
      {children}
    </RadixTabs.Trigger>
  );
};

Tab.propTypes = {
  value: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
  backgroundColor: PropTypes.string,
  activeColor: PropTypes.string,
  activeBackgroundColor: PropTypes.string,
  disableColor: PropTypes.string,
  disableBackgroundColor: PropTypes.string,
  disabled: PropTypes.bool,
  selected: PropTypes.bool,
};

Tab.defaultProps = {
  color: "#4a5568",
  backgroundColor: "transparent",
  activeColor: "#3182ce",
  activeBackgroundColor: "#edf2f7",
  disableColor: "#cbd5e0",
  disableBackgroundColor: "#e2e8f0",
  disabled: false,
  selected: undefined,
};

export default Tab;
