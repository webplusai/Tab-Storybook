import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import * as RadixTabs from "@radix-ui/react-tabs";
import TabsList from "../components/Tabs/TabsList";

// Mock Radix Tabs Root to avoid errors
jest.mock("@radix-ui/react-tabs", () => {
  return {
    Root: ({ children }) => <div>{children}</div>,
    List: ({ children, className }) => (
      <div className={className}>{children}</div>
    ),
  };
});

describe("TabsList Component", () => {
  it("renders without crashing", () => {
    const { getByText } = render(
      <RadixTabs.Root>
        <TabsList>
          <div>Tab 1</div>
          <div>Tab 2</div>
        </TabsList>
      </RadixTabs.Root>
    );
    expect(getByText("Tab 1")).toBeInTheDocument();
    expect(getByText("Tab 2")).toBeInTheDocument();
  });

  it("applies the correct tabs", () => {
    const { getByText } = render(
      <RadixTabs.Root>
        <TabsList>
          <div>Tab 1</div>
          <div>Tab 2</div>
        </TabsList>
      </RadixTabs.Root>
    );
    expect(getByText("Tab 1")).toBeInTheDocument();
    expect(getByText("Tab 2")).toBeInTheDocument();
  });
});
