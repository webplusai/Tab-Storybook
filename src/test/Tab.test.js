import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import * as RadixTabs from "@radix-ui/react-tabs";
import Tab from "../components/Tabs/Tab.js";

// Mock Radix Tabs Root to avoid errors
jest.mock("@radix-ui/react-tabs", () => {
  return {
    Root: ({ children }) => <div>{children}</div>,
    Trigger: ({ value, children, className, style }) => (
      <button data-value={value} className={className} style={style}>
        {children}
      </button>
    ),
  };
});

describe("Tab Component", () => {
  it("renders without crashing", () => {
    const { getByText } = render(
      <RadixTabs.Root>
        <Tab value="tab1">Tab 1</Tab>
      </RadixTabs.Root>
    );
    expect(getByText("Tab 1")).toBeInTheDocument();
  });

  it("applies the default active color and background color", () => {
    const { getByText } = render(
      <RadixTabs.Root>
        <Tab value="tab1">Tab 1</Tab>
      </RadixTabs.Root>
    );
    const tab = getByText("Tab 1");
    expect(tab).toHaveStyle("--active-color: #3182ce");
    expect(tab).toHaveStyle("--active-background-color: #edf2f7");
  });

  it("applies custom active color and background color", () => {
    const customActiveColor = "#ff0000";
    const customActiveBackgroundColor = "#00ff00";
    const { getByText } = render(
      <RadixTabs.Root>
        <Tab
          value="tab1"
          activeColor={customActiveColor}
          activeBackgroundColor={customActiveBackgroundColor}
        >
          Tab 1
        </Tab>
      </RadixTabs.Root>
    );
    const tab = getByText("Tab 1");
    expect(tab).toHaveStyle(`--active-color: ${customActiveColor}`);
    expect(tab).toHaveStyle(
      `--active-background-color: ${customActiveBackgroundColor}`
    );
  });

  it("has the correct value attribute", () => {
    const { getByText } = render(
      <RadixTabs.Root>
        <Tab value="tab1">Tab 1</Tab>
      </RadixTabs.Root>
    );
    const tab = getByText("Tab 1");
    expect(tab).toHaveAttribute("data-value", "tab1");
  });

  it("applies selected styles when selected prop is true", () => {
    const { getByText } = render(
      <RadixTabs.Root>
        <Tab value="tab1" selected>
          Tab 1
        </Tab>
      </RadixTabs.Root>
    );
    const tab = getByText("Tab 1");
    expect(tab).toHaveStyle("--active-color: #3182ce");
    expect(tab).toHaveStyle("--active-background-color: #edf2f7");
  });

  it("applies disabled styles when disabled prop is true", () => {
    const { getByText } = render(
      <RadixTabs.Root>
        <Tab value="tab1" disabled>
          Tab 1
        </Tab>
      </RadixTabs.Root>
    );
    const tab = getByText("Tab 1");
    expect(tab).toHaveStyle("--disable-color: #cbd5e0");
    expect(tab).toHaveStyle("--disable-background-color: #e2e8f0");
  });
});
