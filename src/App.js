// import logo from './logo.svg';
  import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Blog from './components/Blog/Blog';
import Chart from './components/Chart/Chart';
import Home from './components/Home/Home';
import Quiztopic from './components/Quiztopic/Quiztopic';

function App() {
  const Router = createBrowserRouter([
    {path:'/', element:<div>this is default</div>},
    {path:'home', element:<Home></Home>},
    {path:'/quiztopic', element:<Quiztopic></Quiztopic>},
    {path:'/chart', element:<Chart></Chart>},
    {path:'/blog', element:<Blog></Blog>}
  ])
  return (
    <div className="App">
      <RouterProvider router={Router}></RouterProvider>
    </div>
  );
}

export default App;
