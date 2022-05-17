import React, { useContext, useRef, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { TodoContext } from '../context/TodoContext';
import axios from 'axios';

const UpdateTodo = () => {
  const form = useRef();

  const [todo] = useContext(TodoContext);
  const { id, title, description, status } = todo;
  const { isUpdate } = useContext(TodoContext);
  console.log('update', isUpdate);

  const [statusTodo, setStatusTodo] = useState({ status });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setStatusTodo({
      [name]: value,
    });

    // isUpdate: !isUpdate;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const title = form.title.value;
    const description = form.description.value;
    const { status } = statusTodo;

    try {
      await axios.patch(`http://localhost:3001/todo/${id}`, {
        title,
        description,
        status,
      });

      form.reset();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Form ref={form} onSubmit={(e) => handleSubmit(e)}>
        <Form.Group className="mb-3" controlId="formTitle">
          <Form.Control type="input" name="title" defaultValue={title} />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formDescription">
          <Form.Control
            type="input"
            name="description"
            defaultValue={description}
          />
        </Form.Group>
        <div className="radio-buttons">
          pending
          <input
            id="pending"
            value="pending"
            name="status"
            type="radio"
            onChange={(e) => handleChange(e)}
          />
          inProgress
          <input
            id="inProgress"
            value="inProgress"
            name="status"
            type="radio"
            onChange={(e) => handleChange(e)}
          />
          done
          <input
            id="done"
            value="done"
            name="status"
            type="radio"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <Form.Group className="mb-3" controlId="formBasicCheckbox"></Form.Group>
        <Button variant="dark" type="submit">
          Update task
        </Button>
      </Form>
    </>
  );
};

export default UpdateTodo;
