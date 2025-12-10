import {createBrowserRouter} from "react-router-dom";

import Home from "../../pages/Home";
import Layout from "../../pages/layout.tsx";
import NotFound from "../../pages/NotFound";
import ErrorPage from "../../pages/Error";
import TodosPage from "../../pages/Todos";



const routes = [
  {
    path: "/",
    Component: Layout,
    errorElement: ErrorPage(),
    children: [
      {
        index: true,
        Component: Home,
      },
      { path: "/todos/:userId", Component: TodosPage },
      { path: "*", Component: NotFound }
    ]
  },
]

export default createBrowserRouter(routes)