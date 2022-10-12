import React from 'react';
import Header from '../Header/Header';

const Blog = () => {
    return (
        <div className='mr-32 ml-32'>
            <div className='p-10 '>
                <h1 className='text-3xl font-bold pb-5'>1. What is the purpose of React Router?</h1>
                <p>ReactJS Router is mainly used for developing Single Page Web Applications. React Router is used to define multiple routes in the application. When a user types a specific URL into the browser, and if this URL path matches any 'route' inside the router file, the user will be redirected to that particular route.</p>
                <br />
                <p>React Router is a standard library system built on top of the React and used to create routing in the React application using React Router Package. It provides the synchronous URL on the browser with data that will be displayed on the web page. It maintains the standard structure and behavior of the application and mainly used for developing single page web applications.</p>
            </div>
            <div className='p-10'>
                <h1 className='text-3xl font-bold pb-5'>2. How does context API works?</h1>
                <p>The new React Context API, introduced with React v.16.3, allows us to pass data through our component trees, giving our components the ability to communicate and share data at different levels.In this tutorial, we’ll explore how we can use React Context to avoid prop drilling.First, we’ll cover what prop drilling is and why we should avoid it.</p>
                <br />
                <p>Each component in Context is context-aware.Essentially, instead of passing props down through every single component on the tree, the components in need of a prop can simply ask for it, without needing intermediary helper components that only help relay the prop.</p>
            </div>
            <div className='p-10'>
                <h1 className='text-3xl font-bold pb-5'>3. What is useRef in React?</h1>
                <p>The useRef hook is the new addition in React 16.8. Before proceeding to this article there is a prerequisite to know about the ref in react.
                    The useRef is a hook that allows to directly create a reference to the DOM element in the functional component. </p>
                <br />
                <p>The useRef returns a mutable ref object. This object has a property called .current. The value is persisted in the refContainer.current property. These values are accessed from the current property of the returned object. The .current property could be initialised to the passed argument initialValue e.g. useRef(initialValue). The object can persist a value for a full lifetime of the component.</p>
            </div>
        </div>
    );
};

export default Blog;