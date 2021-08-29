import React, { ReactElement, Suspense, lazy } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

const Homepage = lazy(() => import('./pages/home'));
const SignIn = lazy(() => import('./pages/sign-in'));

function App(): ReactElement {
  return (
    <Router>
      {/* <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/sign-up">Sign-up</Link>
        </li>
        <li>
          <Link to="/sign-in">Sign-in</Link>
        </li>
      </ul>

      <hr /> */}
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route path="/sign-in">
            <SignIn />
          </Route>
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
