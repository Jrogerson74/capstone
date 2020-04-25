import React, { Component } from 'react';
import {
 BrowserRouter as Router,
 Switch,
 Route
} from 'react-router-dom';

import DecadesContainer from './decades/decades-container';
import NavigationContainer from './navigation/navigation-container';
import Home from './pages/home';
import Eighties from './pages/eighties';
import Nineties from './pages/nineties';
import TwoThousands from './pages/twoThousands';
import TwentyTens from './pages/twentyTens';

export default class App extends Component {
  render() {
    return (
      <div className='app'>     
        <Router>
          <div>
            <h1>HORRIFIED</h1>
            <NavigationContainer />

            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/the-eighties" component={Eighties} />  
              <Route path="/the-nineties" component={Nineties} /> 
              <Route path="/two-thousands" component={TwoThousands} />
              <Route path="/twenty-tens" component={TwentyTens}/>
            </Switch>
          </div>
        </Router>

        <DecadesContainer />
      </div>
    );
  }
}
