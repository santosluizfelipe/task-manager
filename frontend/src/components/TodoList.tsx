import React from "react";
import { useQuery, gql } from '@apollo/client';

interface Todo {
  id: string;
  content: string;
  is_completed: boolean;
}

interface TodosData {
  todo_items: Todo[];
}

const MY_QUERY = gql`
  query {
    todo_items {
      id
      content
      is_completed
    }
  }
`;

const TodoList: React.FC = () => {
  const { loading, error, data } = useQuery<TodosData>(MY_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      <h1>Hello world</h1>
      <ul>
        {data?.todo_items.map(todo => (
          <li key={todo.id}>
            {todo.content} - {todo.is_completed ? 'completed' : 'not completed'}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
