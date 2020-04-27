import React from "react";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

const getBooksQuery = gql`
  {
    books {
      name
      genre
    }
  }
`;
function BookList(props) {
  const { loading, error, data } = useQuery(getBooksQuery);
  console.log(data)
  return <div></div>;
}

export default BookList;
