
import './App.css';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import ErrorPage from './components/ErrorPage'
import Footer from './components/Footer'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import WeAre from './components/WeAre';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Hero/> ,
    errorElement: <ErrorPage />,
  },
  {
    path: "/weare",
    element:<WeAre/> ,
    errorElement: <ErrorPage />,
  },
]);

function App() {
  return (
    <div>
      <Navbar/>
      <RouterProvider router={router} />
      <Footer/>
    </div>
  );
}

export default App;
