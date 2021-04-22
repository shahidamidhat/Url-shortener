import React from 'react';
import './App.css';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import Main from './screens/main';
import Registration from './screens/registration';
import Login from './screens/login';
import Topbar from './screens/navbar';

function App() {
  return (
    <>
    <body className="App">
      <Router>
			<Topbar></Topbar>
			<Switch>
				<Route path='/' component={Registration} exact />
				<Route path='/login' component={Login} exact />
				<Route path='/shortener/:id' component={Main} exact />
			</Switch>
		</Router>
    </body>
    </>
  );
}

export default App;
