import React, { useState} from 'react';
import ReactDOM from 'react-dom/client';
import Contact from '../components/MainTable';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Top from './Top';
import Home from './Home';
import Calendar from './CalendarPage';
import LoginForm from './LoginForm';
import PrivateRoute from '../components/PrivateRoute';
import SignUp from './SignUp';
import NotFound from './NotFound';



function Example() {

  const [loggedIn, setLoggedIn] = useState(false); // ログイン状態のステート
    return (
      <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route
          exact
          path="/signup"
          render={(props) => <SignUp {...props} setLoggedIn={setLoggedIn} />}
        />
        <Route exact path="/login">
          <LoginForm setLoggedIn={setLoggedIn} />
        </Route>
        <PrivateRoute
          exact
          path="/top"
          component={Top}
          loggedIn={loggedIn}
          setLoggedIn={setLoggedIn}
        />
        <PrivateRoute
          exact
          path="/calendar"
          component={Calendar}
          loggedIn={loggedIn}
        />
         <Route component={NotFound} />
      </Switch>
    </Router>
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
