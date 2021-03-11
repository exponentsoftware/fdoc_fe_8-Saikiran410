import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import AddAlbum from './components/AddAlbum';
import Albums from './components/Albums';
import Sidebar from './components/Sidebar';
//import movies from './components/Data';

function App(){
  return(
     <>
     <Router>
       <Sidebar />
       <Switch>
         <Route path="/albums" component={Albums} />
         <Route path="/add-Album" component={AddAlbum} />
       </Switch>
     </Router>
   </>
  );

}
export default App;




