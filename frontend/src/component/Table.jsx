import React, { useContext, useEffect, useState } from 'react';
import { TodoContext } from '../context/TodoContext';
import DeleteTodo from './DeleteTodo';
import { Table, Dropdown, Button } from 'react-bootstrap';
import axios from 'axios';

const TableTodo = () => {
  const [todos, setTodos] = useState([
    {
      id: null,
      title: '',
      description: '',
      status: '',
      createdAt: '',
      updatedAt: '',
    },
  ]);
  const { todo, setTodo, isUpdate, setIsUpdate, show, setShow } =
    useContext(TodoContext);

  useEffect(() => {
    getTodo('all');
  }, []);

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

  const handleClick = async (id) => {
    try {
      const { data } = await axios.get(`http://localhost:3001/todo/${id}`);

      setTodo(data);
      setIsUpdate(!isUpdate);
    } catch (error) {
      console.log(error);
    }
  };

  return show === false ? (
    <div className="table-todo">
      <Table striped hover variant="dark">
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
            <tbody key={id}>
              <tr>
                <td>{index + 1}</td>
                <td>{title}</td>
                <td>{description}</td>
                <td>{status}</td>
                <div className="btn-side">
                  <Button
                    variant="warning"
                    type="button"
                    size="sm"
                    onClick={() => handleClick(id)}
                  >
                    update
                  </Button>
                  <Button
                    variant="danger"
                    type="button"
                    size="sm"
                    onClick={() => {
                      setShow(true);
                      handleClick(id);
                      DeleteTodo(todo);
                    }}
                  >
                    delete
                  </Button>
                </div>
              </tr>
            </tbody>
          ))
        )}
      </Table>
      <Dropdown>
        <Dropdown.Toggle id="dropdown-status" variant="secondary">
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
    </div>
  ) : (
    <DeleteTodo />
  );
};

export default TableTodo;
