import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Root from "./Pages/Root";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Tournament from './Pages/Tournament/Tournament';
import Shop from './Pages/Shop/Shop';
import Contacts from './Pages/Contacts/Contacts';
import News from './Pages/News/News';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      {path:"tournament",element:<Tournament/>},
      {path:"shop",element:<Shop/>},
      {path:"news",element:<News/>},
      {path:"contacts",element:<Contacts/>},
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
//https://mykd-next-js.vercel.app/
