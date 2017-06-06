//Core App things
import React, {Component} from 'react'
import {Route} from 'react-router';

//Core Pages
import Splash from './components/Splash';

//Root Pages
import Home from './components/Home';
import Settings from './components/Settings';

//User Pages
import SignIn from './components/Signin';
import Logout from './components/shared/Logout';

//Sex Selection Pages
import SexTypeSelection from './components/SexTypeSelection';
import Desire from './components/Desire';

export default class Routes extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={Splash}/>

        <Route path="/signin" component={SignIn} />
        <Route path="/logout" component={Logout} />

        <Route path="/home" component={Home}  />
        <Route path="/settings" component={Settings} />

        <Route path="/sextypeselection" component={SexTypeSelection} />
        <Route path="/desire" component={Desire} />
      </div>
    )
  }
};
