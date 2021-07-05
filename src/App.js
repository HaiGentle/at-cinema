import './App.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import routersMap from './routers';

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          {
            routersMap.map(routerConfig => (
              <Route
                key={routerConfig.path}
                exact={routerConfig.exact}
                path={routerConfig.path}
                component={routerConfig.component}
              />
            ))
          }
        </Switch>
      </Router>
    </div>
  );
}

export default App;
