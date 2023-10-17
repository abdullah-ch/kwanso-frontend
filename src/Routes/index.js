import { useRoutes } from "react-router-dom";
import { ListTasks } from "../Pages/ListTasks";
import { CreateTasks } from "../Pages/CreateTasks";
import { BulkDelete } from "../Pages/BulkDelete";

const PUBLIC_ROUTES = [
  {
    path: "list-tasks",
    element: <ListTasks />,
  },
  {
    path: "create-task",
    element: <CreateTasks />,
  },
  {
    path: "bulk-delete",
    element: <BulkDelete />,
  },
];

export default function Router() {
  let element = useRoutes([
    // {
    //   path: "/",
    //   element: <ListTasks />,
    //   children: PUBLIC_ROUTES,
    // },
    ...PUBLIC_ROUTES,
  ]);
  console.log(element);
  return element;
}
