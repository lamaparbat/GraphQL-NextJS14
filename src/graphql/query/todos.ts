import { gql } from "@apollo/client";

export const query = gql`
    query GetAllTodos{
        getTodos {
            title
            deadline
            isCompleted
        }
    }
`;