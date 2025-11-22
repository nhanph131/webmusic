
import { createBrowserRouter } from 'react-router-dom';
import App from '../App.jsx';
import HomePage from '../pages/home.page.jsx';
import PageFeed from '../pages/feed.page.jsx';
import PageFeed2 from '../pages/feed.page.2.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage/>,
      },
      { path: "/feed", element: <PageFeed/> },
      { path: "/feed1", element: <PageFeed2/> },
      
    ],
  },
]);
export default router;