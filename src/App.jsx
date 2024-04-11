import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './App.css'
import PodcastSearchRoute from './components/routes/PodcastSearchRoute.jsx';
import PodcastDetailRoute from './components/routes/PodcastDetailRoute.jsx';
import ErrorPage from './components/errorPage.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <PodcastSearchRoute />,
    errorElement: <ErrorPage />,
    // children: [
    //   {
    //     path: "contacts/:contactId",
    //     element: <Contact />,
    //   },
    // ],
  },
  {
    path: "detail/:podcastId",
    element: <PodcastDetailRoute />,
    errorElement: <ErrorPage />,
  },
]);


export default function Podcast() {

  return (
    <RouterProvider router={router} />
  );
}
