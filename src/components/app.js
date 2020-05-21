import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import NavigationContainer from './navigation/navigation-container';
import Header from './headernav/header';
import Home from './pages/home';
import Eighties from './pages/eighties';
import Nineties from './pages/nineties';
import TwoThousands from './pages/twoThousands';
import TwentyTens from './pages/twentyTens';
import NoMatch from "./pages/no-match";

export default class App extends Component {
  getDecadeItems() {
    axios
      .get('/user?ID=12345')
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {
      });
  }
  render() {
    return (
      <div className='app'>     
        <Router>
          <div>
            <Header />
            <NavigationContainer />

            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/the-eighties" component={Eighties} />  
              <Route path="/the-nineties" component={Nineties} /> 
              <Route path="/two-thousands" component={TwoThousands} />
              <Route path="/twenty-tens" component={TwentyTens}/>
              <Route component={NoMatch}/>
            </Switch>
          </div>
        </Router>

      </div>
    );
  }
}
