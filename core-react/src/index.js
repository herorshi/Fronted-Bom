import React from "react";
import ReactDOM from "react-dom";
import { AppContainer } from "react-hot-loader";
import RootContainer from "Containers/Root";

const render = Component => {
  // <h1>Hello World!</h1>,
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById("root")
  );
};

render(RootContainer);

if (module.hot) {
  module.hot.accept("Containers/Root", () => render(RootContainer));
}
