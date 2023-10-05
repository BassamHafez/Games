import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Root from "./Pages/Root";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
//https://mykd-next-js.vercel.app/
