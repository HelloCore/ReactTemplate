import React from "react";
import styled from "styled-components";
import { storiesOf } from "@storybook/react";
import HelloLabel from "../HelloLabel";

const Container = styled.div``;

storiesOf("labels/HelloLabel", module)
  .addDecorator(story => <Container>{story()}</Container>)
  .add("default", () => <HelloLabel text="1234" />);
