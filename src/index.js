import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import {Router, Route, browserHistory,IndexRoute} from 'react-router';
import {Provider} from 'react-redux';
import './index.css';
import ExercisePage from './exercise-creation/exercise-page';
import Greeting from './other-components/greetings';
import rootReducer from './root-reducer';
import OverviewPage from './exercises-overview/overview-page';


const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Greeting}/>
      <Route path="uppgift/:id" component={ExercisePage}/>
      <Route path="overview" component={OverviewPage}/>
    </Route>
  </Router>
</Provider>, document.getElementById('root'));