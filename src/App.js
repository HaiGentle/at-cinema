import './App.scss';
// import Home from './pages/home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import routersMap from './routers';

function App() {
  return (
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
    // <div className="app">
    //   <Home />
    // </div>
  );
}

export default App;
