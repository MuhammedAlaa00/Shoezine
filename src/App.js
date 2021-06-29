import React from 'react';
import Register from './Components/register';
import {BrowserRouter as Router , Switch , Route} from 'react-router-dom'
import ThemeContext from './Contexts/ThemeContext'
import AppMainTheme from './Components/AppMainTheme';
import AuthContext from './Contexts/AuthContext';
import Home from './Components/Home';
import Clothes from './Components/Clothes';
import Decoration from './Components/Decoration'
import Fashion from './Components/Fashion'
import Travel from './Components/Travel'
function App (){
return (     
  <AuthContext>
    <ThemeContext>
          <AppMainTheme>
              <Router>
                <Switch>
                  <Route exact path="/" component={Register}/>
                  <Route path="/Home" component={Home}/>
                  <Route path="/Clothes" component={Clothes}/>
                  <Route path="/Decoration" component={Decoration}/>
                  <Route path="/Fashion" component={Fashion}/>
                  <Route path="/Travel" component={Travel}/>
                </Switch>
              </Router>
          </AppMainTheme>
      </ThemeContext>
  </AuthContext>
      
  );
}

export default App;
