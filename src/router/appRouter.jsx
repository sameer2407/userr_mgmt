import { createBrowserRouter } from "react-router-dom";
import Landing from "../components/Landing";
import UserPage from "../components/UserPage";
import UserList from "../components/UserList";
import UserDetaile from "../components/UserDetaile";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/users",
    element: <UserPage></UserPage>,
    children: [
      {
        path: "/users",
        element: <UserList></UserList>,
      },
      {
        path: "/users/:userid",
        element: <UserDetaile></UserDetaile>,
      },
    ],
  },
]);
export default appRouter;
