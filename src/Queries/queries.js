import { gql } from "apollo-boost";

const getBooksQuery = gql`
  {
    books {
      name
      genre
    }
  }
`;

const getAuthorListQuery = gql`
  {
    authors {
      name
      id
    }
  }
`;

const addBookQuery = gql`
  mutation($name:String! , $genre:String! , $authorId:ID!) {
    addBook(name:$name , genre:$genre , authorId:$authorId) {
      name
      genre
    }
  }
`;

export { getBooksQuery, getAuthorListQuery, addBookQuery };
