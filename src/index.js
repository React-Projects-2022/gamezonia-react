import React from "react";
import ReactDOM from "react-dom";

import { ApolloProvider } from "@apollo/client";
import { BrowserRouter } from "react-router-dom";
import Router from "./Router";
import { GraphQLConfig } from "./graphql/config";
import "./index.css";
import Provider from "./application/provider";
//
const graphQLConfig = new GraphQLConfig(
  process.env.NODE_ENV === "production"
    ? "http://localhost:2002/graphql"
    : "https://gamezonia-api.herokuapp.com/graphql",
    "wss://gamezonia-api.herokuapp.com/graphql"
);
ReactDOM.render(
  <Provider>
    <ApolloProvider client={graphQLConfig.getClient()}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ApolloProvider>
  </Provider>,
  document.getElementById("root")
);
