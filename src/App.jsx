import {
  createBrowserRouter,
  RouterProvider,
  Navigate
} from "react-router-dom";
import PodcastSearchRoute from './routes/PodcastSearchRoute.jsx';
import PodcastDetailRoute from './routes/PodcastDetailRoute.jsx';
import HomeRoute from "./routes/HomeRoute.jsx";
import ErrorPage from './components/errorPage.jsx';
import { GlobalStyles } from "./styles/GlobalStyles.js";


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeRoute />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Navigate to="/list" replace={true} />
      },
      {
        path: "list",
        element: <PodcastSearchRoute />,
      }, {
        path: "detail/:podcastId",
        element: <PodcastDetailRoute />,
      }
    ],
  },
]);


export default function Podcast() {

  return (
    <>
      <GlobalStyles />
      <RouterProvider router={router} />
    </>
  );
}
