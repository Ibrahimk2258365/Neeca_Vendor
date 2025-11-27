"use client";

import { ApolloClient, InMemoryCache, HttpLink,  } from "@apollo/client";

// ✅ HTTP link
const httpLink = new HttpLink({
  uri: "https://dev-server.neers.com.pk/graphql",
  credentials: "omit", // include cookies if server requires
});

// ✅ Apollo Client
const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

export default client;
