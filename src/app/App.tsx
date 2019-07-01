import React from "react";
import styled, { keyframes } from "styled-components";
import { Provider } from "react-redux";
import { Store } from "redux";
import logo from "./logo.svg";
import setupStore from "./setupStore";
import HelloContainer from "../features/common/HelloContainer";

const Container = styled.div`
  text-align: center;
`;

const AppHeader = styled.header`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`;

const AppLogo = styled.img`
  animation: ${rotate} infinite 20s linear;
  height: 40vmin;
  pointer-events: none;
`;

interface Props {}

interface State {
  rootStore?: Store;
}

class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      rootStore: undefined
    };
  }

  componentDidMount() {
    const { store } = setupStore();
    this.setState({
      rootStore: store
    });
  }

  render() {
    const { rootStore = undefined } = this.state;
    if (!rootStore) {
      return null;
    }
    return (
      <Provider store={rootStore}>
        <Container>
          <AppHeader>
            <AppLogo src={logo} alt="logo" />
            <HelloContainer />
            <p>
              Edit <code>src/App.tsx</code> and save to reload.
            </p>
          </AppHeader>
        </Container>
      </Provider>
    );
  }
}

export default App;
