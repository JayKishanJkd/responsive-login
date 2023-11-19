import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from "./components/Login/Login";
import Homescreen from "./components/Home/Homescreen";
import Employerdata from './components/Home/Employerdata';
//import BottomNav from "./components/Home/ButtomNav";
function App() {
  return (
    <Router>
      <div>
        {/* Your main content goes here */}
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/homescreen" component={Homescreen} />
          <Route path="/employerdata" component={Employerdata} />
        </Switch>

        
      </div>
    </Router>
  );
}

export default App;
