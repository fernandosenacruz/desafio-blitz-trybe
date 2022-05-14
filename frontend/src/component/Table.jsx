import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import API from '../utils/getTodo';

const Table = () => {
  const [todos, setTodos] = useState([
    {
      id: null,
      title: 'No task yet',
      description: '',
      status: '',
      createdAt: '',
      updatedAt: '',
    },
  ]);

  useEffect(() => {
    async function getTodo() {
      try {
        const { data } = await axios.get('http://localhost:3001/');
        setTodos(data);
      } catch (error) {
        console.log(error);
      }
    }
    getTodo();
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>Title</th>
          <th>Description</th>
          <th>Status</th>
        </tr>
      </thead>
      {todos.map(({ id, title, description, status }, index) => (
        <tbody key={index + id}>
          <tr>
            <td>{index}</td>
            <td>{title}</td>
            <td>{description}</td>
            <td>{status}</td>
          </tr>
        </tbody>
      ))}
    </table>
  );
};

export default Table;
