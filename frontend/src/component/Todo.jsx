import React, { useRef } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";

const Todo = () => {
  const form = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const description = form.description.value;
    
    try {
      await axios.post('http://localhost:3001/todo',{
        title,
        description
      });

      form.reset();
    } catch (error) {
      console.log(error);
    };
  };

  return (
    <>
      <Form ref={form} className="todo" onSubmit={(e) => handleSubmit(e)}>
        <Form.Group className="mb-3" controlId="formTitle">
          <Form.Control type="input" name="title" placeholder="Title" required/>
          <Form.Text className="text-muted">
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formDescription">
          <Form.Control type="input" name="description" placeholder="Description" required/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
        </Form.Group>
        <Button variant="dark" size="sm" type="submit">
          Add task
        </Button>
    </Form>
    </>
  );
};

export default Todo;
