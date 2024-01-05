import { gql } from "@apollo/client";

export const GetAllTodosQuery = gql`
    query GetAllTodos{
        getTodos {
            _id
            title
            deadline
            isCompleted
        }
    }
`;

export const GetTodosByIdQuery = gql`
   query GetTodosByIdQuery($id: ID!){
     getTodosById(id: $id) {
            _id
            title
            deadline
            isCompleted
      }
    }
`