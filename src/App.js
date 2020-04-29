import React from "react";
import "./App.css";
import BookList from "./Components/BookList";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import AddBooks from "./Components/AddBooks";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
});

function App() {
  return (
    <ApolloProvider client={client}>
      <BookList />
      <AddBooks />
    </ApolloProvider>
  );
}

export default App;
