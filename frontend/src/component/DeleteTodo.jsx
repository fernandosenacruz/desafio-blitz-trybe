import React, { useContext } from 'react';
import { Button, Modal } from 'react-bootstrap';
import axios from 'axios';
import { TodoContext } from '../context/TodoContext';


const DeleteTodo = (todo) => {
  const { show, setShow } = useContext(TodoContext);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/todo/${id}`);
    } catch (error) {
      console.log(error);
    }
  };

  const handleClose = () => {
    setShow(false);
  };

  const handleDeleteTask = () => {
    handleDelete(todo.id);
    setShow(false);
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Delete Task!</Modal.Title>
      </Modal.Header>
      <Modal.Body>Warning! Do you really want to delete this task?</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="danger" onClick={handleDeleteTask}>
          Delete
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DeleteTodo;
