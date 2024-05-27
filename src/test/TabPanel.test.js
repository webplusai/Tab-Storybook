import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import * as RadixTabs from "@radix-ui/react-tabs";
import TabPanel from "../components/Tabs/TabPanel";

// Mock Radix Tabs Root to avoid errors
jest.mock("@radix-ui/react-tabs", () => {
  return {
    Root: ({ children }) => <div>{children}</div>,
    Content: ({ value, children, className, style }) => (
      <div data-value={value} className={className} style={style}>
        {children}
      </div>
    ),
  };
});

describe("TabPanel Component", () => {
  it("renders without crashing", () => {
    const { getByText } = render(
      <RadixTabs.Root>
        <TabPanel value="panel1">Content for Tab 1</TabPanel>
      </RadixTabs.Root>
    );
    expect(getByText("Content for Tab 1")).toBeInTheDocument();
  });

  it("applies the default font size and color", () => {
    const { getByText } = render(
      <RadixTabs.Root>
        <TabPanel value="panel1">Content for Tab 1</TabPanel>
      </RadixTabs.Root>
    );
    const panel = getByText("Content for Tab 1");
    expect(panel).toHaveStyle("--font-size: 16px");
    expect(panel).toHaveStyle("--color: #2d3748");
  });

  it("applies custom font size and color", () => {
    const customFontSize = "18px";
    const customColor = "#ff0000";
    const { getByText } = render(
      <RadixTabs.Root>
        <TabPanel value="panel1" fontSize={customFontSize} color={customColor}>
          Content for Tab 1
        </TabPanel>
      </RadixTabs.Root>
    );
    const panel = getByText("Content for Tab 1");
    expect(panel).toHaveStyle(`--font-size: ${customFontSize}`);
    expect(panel).toHaveStyle(`--color: ${customColor}`);
  });

  it("has the correct value attribute", () => {
    const { getByText } = render(
      <RadixTabs.Root>
        <TabPanel value="panel1">Content for Tab 1</TabPanel>
      </RadixTabs.Root>
    );
    const panel = getByText("Content for Tab 1");
    expect(panel).toHaveAttribute("data-value", "panel1");
  });
});
