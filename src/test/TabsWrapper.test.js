import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import * as RadixTabs from "@radix-ui/react-tabs";
import TabsWrapper from "../components/Tabs/TabsWrapper";

// Mock Radix Tabs Root to avoid errors
jest.mock("@radix-ui/react-tabs", () => {
  return {
    Root: ({ children, defaultValue, className }) => (
      <div className={className} data-default-value={defaultValue}>
        {children}{" "}
      </div>
    ),
  };
});

describe("TabsWrapper Component", () => {
  it("renders without crashing", () => {
    const { getByText } = render(
      <TabsWrapper defaultValue="tab1">
        <div>Tab 1</div>
        <div>Tab 2</div>
      </TabsWrapper>
    );
    expect(getByText("Tab 1")).toBeInTheDocument();
    expect(getByText("Tab 2")).toBeInTheDocument();
  });

  it("applies the correct class name", () => {
    const { container } = render(
      <TabsWrapper defaultValue="tab1">
        <div>Tab 1</div>
        <div>Tab 2</div>
      </TabsWrapper>
    );
    const tabsWrapper = container.firstChild;
    expect(tabsWrapper).toHaveClass("radix-TabsRoot");
  });

  it("applies the correct defaultValue", () => {
    const defaultValue = "tab1";
    const { getByText } = render(
      <TabsWrapper defaultValue={defaultValue}>
        <div>Tab 1</div>
        <div>Tab 2</div>
      </TabsWrapper>
    );
    const tabsRoot = getByText("Tab 1").parentNode;
    expect(tabsRoot).toHaveAttribute("data-default-value", defaultValue);
  });
});
