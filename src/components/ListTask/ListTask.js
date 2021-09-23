import React from "react";
import { useSelector } from "react-redux";
import Task from "../Task/Task";
import "bootstrap/dist/css/bootstrap.min.css";

const ListTask = () => {
  const tasks = useSelector((state) => state.taskReducer.tasks);
  const filter = useSelector((state) => state.taskReducer.filter);
  var filteredTasks = tasks;
  if (filter === "done") {
    filteredTasks = tasks.filter((task) => task.isDone);
  } else if (filter === "notDone") {
    filteredTasks = tasks.filter((task) => !task.isDone);
  }
  return (
    <div className="card">
      <div className="card-body p-5">
        {filteredTasks.map((task, index) => (
          <Task task={task} key={index} />
        ))}
      </div>
    </div>
  );
};

export default ListTask;
