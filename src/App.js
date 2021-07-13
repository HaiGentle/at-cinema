import './App.scss';
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import 'aos/dist/aos.css';

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
