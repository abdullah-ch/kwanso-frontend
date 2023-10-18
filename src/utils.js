function saveTaskToLocalStorage(state) {
  try {
    const tasks = getTasksFromLocalStorage();
    tasks.push(state);
    const serializedState = JSON.stringify(tasks);
    localStorage.setItem("tasks", serializedState);
  } catch (e) {
    return undefined;
  }
}

const getTasksFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem("tasks")) ?? [];
};

const setTasksToLocalStorage = (tasks) => {
  const serializedState = JSON.stringify(tasks);
  localStorage.setItem("tasks", serializedState);
};
export {
  saveTaskToLocalStorage,
  getTasksFromLocalStorage,
  setTasksToLocalStorage,
};
