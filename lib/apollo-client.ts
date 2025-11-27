"use client";

import { ApolloClient, InMemoryCache, HttpLink,  } from "@apollo/client";
const GRAPHQL_URL = process.env.NEXT_PUBLIC_GRAPHQL_URL;

// ✅ HTTP link
const httpLink = new HttpLink({
  uri: GRAPHQL_URL,
  credentials: "omit", // include cookies if server requires
});

// ✅ Apollo Client
const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

export default client;
