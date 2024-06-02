import RootLayout from "./layouts/RootLayout";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import AdminPage from "./pages/AdminPage";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ResultPage from "./pages/ResultPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <HomePage />,
          index: true,
        },
        {
          path: "/profile",
          element: <ProfilePage />,
        },
        {
          path: "/result",
          element: <ResultPage />,
        },
        {
          path: "/admin",
          element: <AdminPage />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
