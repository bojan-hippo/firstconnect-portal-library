import React from "react";
import { styled } from "@stitches/react";

import { TestComponentProps } from "./TestComponent.types";

const TestComponent: React.FC<TestComponentProps> = ({ theme }) => (
  <Container
    data-testid="test-component"
    className={`test-component test-component-${theme}`}
  >
    <h1 className="heading">I'm the test component</h1>
  </Container>
);

const Container = styled("div", {
  backgroundColor: "red",
  borderRadius: "9999px",
});

export default TestComponent;
