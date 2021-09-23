import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deleteTask, editTask, toggleDone } from "../../js/action/taskAction";

const Task = ({ task }) => {
  const dispatch = useDispatch();
  const [text, setText] = useState(task.todo);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const edit = () => {
    dispatch(editTask({ id: task.id, todo: text }));
    handleClose();
  };
  return (
      <div className="tab-content" id="ex1-content">
        <div
          className="tab-pane fade show active"
          id="ex1-tabs-1"
          role="tabpanel"
          aria-labelledby="ex1-tab-1"
        >
          <ul class="list-group mb-0">
            <li
              className={
                task.isDone
                  ? "p-2 text-decoration-line-through list-group-item d-flex align-items-center border-0 mb-2 rounded"
                  : "p-2 list-group-item d-flex align-items-center border-0 mb-2 rounded"
              }
              style={{ backgroundColor: "#f4f6f7" }}
            >
              <b>{task.todo}</b>
            </li>
          </ul>
        </div>

        <style type="text/css">
          {`
        .btn-flat {
          background-color: purple;
          color: white;
        }
        .btn-delete {
          background-color: #880808;
          color: white;
        }
        .btn-edit {
          background-color : #088F8F;
          color: white;
        }
        `}
        </style>
        <Button
          variant="flat"
          onClick={() => dispatch(toggleDone(task.id))}
          className="m-2"
        >
          {task.isDone ? "Undo" : "Done"}
        </Button>
        <Button onClick={handleShow} variant="edit" className="m-2">
          Edit
        </Button>
        <Button
          variant="delete"
          onClick={() => dispatch(deleteTask(task.id))}
          className="m-2"
        >
          Delete
        </Button>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Task</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <input
              type="text"
              className="form-control"
              onChange={(e) => setText(e.target.value)}
              value={text}
            />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="flat" onClick={edit}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
  );
};

export default Task;
