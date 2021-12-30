import React from "react";
import ReactDOM from "react-dom";
import { ApolloProvider } from "@apollo/client";
import { BrowserRouter } from "react-router-dom";
import Router from "./Router";
import { GraphQLConfig } from "./graphql/config";
import "./index.css";

import "bootstrap/dist/css/bootstrap.min.css";
const graphQLConfig = new GraphQLConfig(
  "https://gamezonia-api.herokuapp.com/graphql",
  "wss://gamezonia-api.herokuapp.com/graphql"
);
ReactDOM.render(
  <ApolloProvider client={graphQLConfig.getClient()}>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </ApolloProvider>,

  document.getElementById("root")
);
