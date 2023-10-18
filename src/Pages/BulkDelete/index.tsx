import React, { useState } from "react";
import { Link } from "react-router-dom";
import TaskCard from "../../Components/TaskCard";
import { useNavigate } from "react-router-dom";
import { ITask } from "../../CommonTypes";
import { getTasksFromLocalStorage, setTasksToLocalStorage } from "../../utils";

interface IRestructuredTask {
  [key: string]: any;
}
export const BulkDelete = () => {
  const tasks: ITask[] = getTasksFromLocalStorage();
  const [selectedTasks, setSelectedTasks] = useState<ITask[]>([]);
  const navigate = useNavigate();

  const handleTaskSelect = (task: ITask) => {
    if (!!selectedTasks.some((selectedTask) => selectedTask.id === task.id)) {
      setSelectedTasks(
        selectedTasks.filter((selectedTask) => selectedTask.id !== task.id)
      );
    } else {
      setSelectedTasks([...selectedTasks, task]);
    }
  };

  const handleBulkDelete = () => {
    const restructuredTasks: IRestructuredTask = tasks.reduce((acc, task) => {
      return {
        ...acc,
        [task.id]: task,
      };
    }, {});

    selectedTasks.forEach((task: ITask) => {
      delete restructuredTasks[task.id];
    });

    setTasksToLocalStorage(Object.values(restructuredTasks));
    navigate("/list-tasks");
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Bulk Delete Tasks</h1>
      <Link to="/list-tasks">
        <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Back to Task List
        </button>
      </Link>

      <div>
        {selectedTasks.length > 0 && (
          <div className="mt-4">
            <button
              onClick={handleBulkDelete}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            >
              Bulk Delete
            </button>
          </div>
        )}

        <ul className="mt-4">
          {tasks.map((task) => (
            <li key={task.id}>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={
                    !!selectedTasks.some(
                      (selectedTask) => selectedTask.id === task.id
                    ) ?? false
                  }
                  onChange={() => handleTaskSelect(task)}
                  className="text-blue-500"
                />
                <TaskCard
                  id={task.id}
                  text={task.text}
                  createdAt={task.createdAt}
                />
              </label>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
