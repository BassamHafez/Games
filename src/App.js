import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Root from "./Pages/Root";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Tournament from "./Pages/Tournament/Tournament";
import Shop from "./Pages/Shop/Shop";
import Contacts from "./Pages/Contacts/Contacts";
import News from "./Pages/News/News";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import ErrorBlock from "./Pages/ErrorBlock/ErrorBlock";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorBlock />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "tournament", element: <Tournament /> },
      { path: "shop", element: <Shop /> },
      { path: "news", element: <News /> },
      { path: "contacts", element: <Contacts /> },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
    ],
  },
]);

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
//https://mykd-next-js.vercel.app/
