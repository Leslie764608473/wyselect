import React from 'react';
import Footer from './components/Footer/index.js'
import routes from './router/index'
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
            {
              routes.map((route,index)=>{
                  return <Route {...route} key={index}/>
              })
            }
        </Switch>
      <Footer/>
      </Router>
      
    </div>
  );
}

export default App;
