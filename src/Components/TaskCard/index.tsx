import React from "react";
import { ITask } from "../../CommonTypes";

const TaskCard = (props: ITask) => {
  const { text, createdAt } = props;
  const formattedDate = new Date(createdAt).toLocaleString();
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 m-4">
      <p className="text-gray-600 mb-2">{text}</p>
      <p className="text-gray-400">{formattedDate}</p>
    </div>
  );
};

export default TaskCard;
