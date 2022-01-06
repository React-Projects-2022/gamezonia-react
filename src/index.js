import React from "react";
import ReactDOM from "react-dom";
import { ApolloProvider } from "@apollo/client";
import { BrowserRouter } from "react-router-dom";
import Router from "./Router";
import { GraphQLConfig } from "./graphql/config";
import "./index.css";

const graphQLConfig = new GraphQLConfig(
  "http://localhost:2002/graphql"
);
ReactDOM.render(
  <ApolloProvider client={graphQLConfig.getClient()}>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </ApolloProvider>,

  document.getElementById("root")
);
