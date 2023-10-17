import React from "react";
import { Link } from "react-router-dom";
import TaskCard from "../../Components/TaskCard";
import { ITask } from "../../CommonTypes";
import { getTasksFromLocalStorage } from "../../utils";

export const ListTasks = () => {
  const tasks: ITask[] = getTasksFromLocalStorage();

  return (
    <div className="container mx-auto p-4 md:p-8 lg:p-12">
      <h1 className="text-2xl font-bold mb-4 md:text-3xl lg:text-4xl lg:mb-6">
        ListTasks
      </h1>
      <Link to="/create-task">
        <button className="mt-4 md:mt-6 lg:mt-8 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Create a Task
        </button>
      </Link>
      <Link to="/bulk-delete">
        <button className="mt-4 md:mt-6 lg:mt-8 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
          Bulk Delete Tasks
        </button>
      </Link>
      <div className="flex flex-wrap justify-center -mx-2">
        {tasks.map((task) => (
          <div
            className="w-full md:w-1/2 lg:w-1/3 px-2 mt-4 md:mt-6 lg:mt-8"
            key={task.id}
          >
            <TaskCard
              id={task.id}
              text={task.text}
              createdAt={task.createdAt}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
