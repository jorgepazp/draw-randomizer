import React from 'react';
import './styles/App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation
} from "react-router-dom";

//rutas
import Header from './components/Header';
import Landing from './components/Landing';
import About from './components/About';


function App() {

 
  return (
    <div className="wrapper">

        <Router>
              <Header/>

            {/* A <Switch> looks through its children <Route>s and
                renders the first one that matches the current URL. */}
            <main className='main'>
            <Switch >
              <Route path="/about">
                <About />
              </Route>
              <Route path="/generator">
                <About />
              </Route>
              <Route path="/">
                <Landing />
              </Route>
            </Switch>
            </main>
          
        </Router>
      <footer className="footer">
      <small>© Copyright 2020. Todos los derechos reservados.</small>
      <br/>
      <small>Template by boy jurgen</small>
      
      </footer>
    </div>
  );
}



export default App;
