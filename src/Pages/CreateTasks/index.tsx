import React, { ChangeEvent, useState } from "react";
import { saveTaskToLocalStorage } from "../../utils";
import { useNavigate } from "react-router-dom";
import { ITask } from "../../CommonTypes";

export const CreateTasks = () => {
  const [task, setTask] = useState("");
  const [error, setError] = useState<string>("");
  const navigate = useNavigate();

  const handleTaskChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setError("");
    setTask(e.target.value);
  };

  const handleTaskSubmit = (): void => {
    if (task.trim() === "") {
      setError("Please enter a task name.");
    } else {
      setError("");

      const newTask: ITask = {
        id: crypto.randomUUID(),
        text: task,
        createdAt: new Date(),
      };

      saveTaskToLocalStorage(newTask);
      setTask("");
      navigate("/list-tasks");
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Create Task</h1>
      <input
        type="text"
        value={task}
        onChange={handleTaskChange}
        className="border border-gray-400 p-2 mr-2"
        placeholder="Enter a new task name"
      />
      {error && <p className="text-red-500">{error}</p>}

      <button
        onClick={handleTaskSubmit}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Add Task
      </button>
    </div>
  );
};
