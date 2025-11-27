"use client";

import { ApolloProvider } from "@apollo/client";
import { ReactNode } from "react";
import client from "../../lib/apollo-client"; // make sure path is correct

// Props interface
interface ApolloWrapperProps {
  children: ReactNode;
}

// TypeScript-safe Apollo wrapper
export default function ApolloWrapper({ children }: ApolloWrapperProps) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
