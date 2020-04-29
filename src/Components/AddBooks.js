import React, { useState } from "react";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { addBookQuery, getAuthorListQuery, getBooksQuery } from "../Queries/queries";
export default function AddBooks() {
  const [name, setName] = useState("");
  const [genre, setGenre] = useState("");
  const [authorId, setAuthorId] = useState("");
  const { error, loading, data } = useQuery(getAuthorListQuery);
  const [addBook, { data1 }] = useMutation(addBookQuery);
  const addBookHandler = () => {
    addBook({
      variables: {
        name,
        genre,
        authorId
      },
      refetchQueries:[{query:getBooksQuery}]
    });
  };
  return (
    <div>
      <input type="text" onChange={(e) => setName(e.target.value)} value={name} />
      <input type="text" onChange={(e) => setGenre(e.target.value)} value={genre} />
      <select onChange={(e) => setAuthorId(e.target.value)} value={authorId}>
        {data &&
          data.authors.map((el) => (
            <option value={el} key={el.id}>
              {el.name}
            </option>
          ))}
      </select>
      <button onClick={addBookHandler}>+</button>
    </div>
  );
}
