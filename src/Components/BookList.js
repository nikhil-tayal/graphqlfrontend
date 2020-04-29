import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { getBooksQuery } from "../Queries/queries";

function BookList(props) {
  const { loading, error, data } = useQuery(getBooksQuery);
  return (
    <>
      <ul>
        {data && data.books.map((el, index) => (
          <li>{el.name}  {el.genre}</li>
        ))}
      </ul>
    </>
  );
}

export default BookList;
