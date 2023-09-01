import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Username from "./components/Username";
import Reset from "./components/Reset";
import Password from "./components/Password";
import Profile from "./components/Profile";
import Recovery from "./components/Recovery";
import Register from "./components/Register";
import PageNotFound from "./components/PageNotFound";

/** root routes */
const router = createBrowserRouter([
  {
    path: "/",
    element: <Username></Username>,
  },
  {
    path: "/register",
    element: <Register></Register>,
  },

  {
    path: "/reset",
    element: <Reset></Reset>,
  },
  { path: "/password", element: <Password></Password> },
  { path: "/recovery", element: <Recovery></Recovery> },
  { path: "/profile", element: <Profile></Profile> },
  { path: "*", element: <PageNotFound></PageNotFound> },
]);

function App() {
  return (
    <main>
      <RouterProvider router={router}></RouterProvider>
    </main>
  );
}

export default App;
