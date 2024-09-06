import { MyProvider } from "./contextAPI/MyProvider";
import { RouterProvider } from "react-router-dom";
import appRouter from "./router/appRouter";

function App() {
  return (
    <MyProvider>
      <RouterProvider router={appRouter} />
    </MyProvider>
  );
}

export default App;
