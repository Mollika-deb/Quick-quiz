// import logo from './logo.svg';
  import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Blog from './components/Blog/Blog';
import Chart from './components/Chart/Chart';
import Home from './components/Home/Home';
import Quiztopic from './components/Quiztopic/Quiztopic';
import Main from './Layout/Main';

function App() {
  const Router = createBrowserRouter([
    
      { path: '/', 
      element: <Main></Main>,
     children:[
       { path: '/', element: <Home></Home> },
       { path: 'home', 
         loader: async () => {
           return fetch('https://openapi.programming-hero.com/api/quiz');
         },
       element: <Home></Home> 
      },

      { path: '/quiz/:quizId',
      loader: async({params}) =>{
        return fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`)
      },
       element: <Quiztopic></Quiztopic>
       },

      { path: '/chart', element: <Chart></Chart> },
       { path: '/blog', element: <Blog></Blog> },
     ]
     },
      
     {path:'*', element:''}
    
    
  ])
  return (
    <div className="App">
      <RouterProvider router={Router}></RouterProvider>
    </div>
  );
}

export default App;
