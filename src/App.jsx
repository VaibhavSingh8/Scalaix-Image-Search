import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Details from "./pages/Details";
import ErrorBoundary from "./components/ErrorBoundary";
import Header from "./components/Header";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ErrorBoundary>
        <Header />
        <Home />
      </ErrorBoundary>
    ),
  },
  {
    path: "/details/:id",
    element: (
      <ErrorBoundary>
        <Header headerValue="Image Details" />
        <Details />
      </ErrorBoundary>
    ),
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
