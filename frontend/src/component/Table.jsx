import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { Dropdown } from 'react-bootstrap';
import axios from 'axios';
// import API from '../utils/getTodo';

const TableTodo = () => {
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

  const getTodo = async (status) => {
    let baseURL = 'http://localhost:3001/';
    if (status === 'all') {
      try {
        const { data } = await axios.get(baseURL);
        setTodos(data);
      } catch (error) {
        console.log(error);
      } finally {
        return;
      }
    }
    try {
      const { data } = await axios.get(baseURL, {
        params: {
          status,
        },
      });
      setTodos(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {}, []);

  return (
    <>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Description</th>
            <th>Status</th>
          </tr>
        </thead>
        {!todos ? (
          <h3>Loading</h3>
        ) : (
          todos.map(({ id, title, description, status }, index) => (
            <tbody key={index + id}>
              <tr>
                <td>{index + 1}</td>
                <td>{title}</td>
                <td>{description}</td>
                <td>{status}</td>
              </tr>
            </tbody>
          ))
        )}
      </Table>
      <Dropdown>
        <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
          Status
        </Dropdown.Toggle>

        <Dropdown.Menu variant="dark">
          <Dropdown.Item href="#/action-1" onClick={() => getTodo('all')}>
            All
          </Dropdown.Item>
          <Dropdown.Item href="#/action-2" onClick={() => getTodo('pending')}>
            Pending
          </Dropdown.Item>
          <Dropdown.Item
            href="#/action-3"
            onClick={() => getTodo('inProgress')}
          >
            In progress
          </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item href="#/action-4" onClick={() => getTodo('done')}>
            Done
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
};

export default TableTodo;
