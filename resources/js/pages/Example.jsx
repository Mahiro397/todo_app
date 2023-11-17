import React from 'react';
import ReactDOM from 'react-dom/client';
import About from './About';
import Contact from '../components/MainTable';
import { BrowserRouter, Route } from 'react-router-dom';
import Top from './Top';
import Home from './Home';
import Calendar from './CalendarPage';
import EditBtn from '../components/EditBtn';


function Example() {
    return (
        <BrowserRouter>
        <Route exact path="/">
        <Home />
      </Route>
        <Route exact path="/top">
        <Top />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route exact path="/calender" >
        <Calendar />
      </Route>
      <Route path="/edit/:id" component={EditBtn} />
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
