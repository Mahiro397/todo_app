import React from 'react';
import ReactDOM from 'react-dom/client';
import About from './About';
import Contact from './MainTable';
import Home from './Home';
import { BrowserRouter, Route } from 'react-router-dom';


function Example() {
    return (
        <BrowserRouter>
        <Route exact path="/">
        <Home />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/contact">
        <Contact />
      </Route>
    </BrowserRouter>
    );
}



  
  

export default Example;

if (document.getElementById('app')) {
   const Index = ReactDOM.createRoot(document.getElementById("app"));

  Index.render(
      <React.StrictMode>
           <Example/>
       </React.StrictMode>
   )
}
