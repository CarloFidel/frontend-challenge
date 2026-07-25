import { createBrowserRouter } from "react-router";
import { RootLayout } from "../layout/RootLayout";
import Home from "../pages/Home";
import WorldMap from "../pages/WorldMap";
import Favorites from "../pages/Favorites";
import Alerts from "../pages/Alerts";
import Settings from "../pages/Settings";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/map",
        element: <WorldMap />,
      },
      {
        path: "/favorits",
        element: <Favorites />,
      },
      {
        path: "/alert",
        element: <Alerts />,
      },
      {
        path: "/settings",
        element: <Settings />,
      },

    ],
  },
]);
