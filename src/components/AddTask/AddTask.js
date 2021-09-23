import React, { useState } from "react";
import { Button, Dropdown } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addTask, filterTask } from "../../js/action/taskAction";

const AddTask = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const { tasks } = useSelector((state) => state.taskReducer);
  const handleAdd = () => {
    text !== ""
      ? dispatch(addTask({ id: tasks.length, todo: text, isDone: false }))
      : alert("Task should not be empty !");
  };
  const handleFilter = (e) => {
    dispatch(filterTask(e.target.name));
  };

  return (
    <div>
      <form className="d-flex justify-content-center align-items-center mb-4">
        <div className="form-outline flex-fill">
          <input
            type="text"
            placeholder="New Task"
            className="form-control"
            onChange={(e) => setText(e.target.value)}
            value={text}
          />
        </div>
        <Button
          className="btn btn-info ms-2 m-2"
          onClick={() => {
            handleAdd();
            setText("");
          }}
        >
          Add
        </Button>
        <Dropdown>
          <Dropdown.Toggle style={{backgroundColor: "#7393B3"}}>Filter</Dropdown.Toggle>
          
          <Dropdown.Menu>
            <Dropdown.Item name="none" onClick={(e) => handleFilter(e)}>
              None
            </Dropdown.Item>
            <Dropdown.Item name="done" onClick={(e) => handleFilter(e)}>
              Done
            </Dropdown.Item>
            <Dropdown.Item name="notDone" onClick={(e) => handleFilter(e)}>
              Not Done
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </form>
    </div>
  );
};

export default AddTask;
