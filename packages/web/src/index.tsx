import * as React from "react";
import ReactDOM from "react-dom";
import { ApolloProvider } from "react-apollo";

import * as serviceWorker from "./serviceWorker";
import { client } from "./apollo";
import { Routes } from "./routes";
import "./index.css";

function MyComponent() {
  return (
    <ApolloProvider client={client}>
      <Routes />
    </ApolloProvider>
  );
}

ReactDOM.render(<MyComponent />, document.getElementById(
  "root"
) as HTMLElement);

serviceWorker.register();
