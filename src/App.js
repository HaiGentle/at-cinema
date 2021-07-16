import './App.scss';
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import 'aos/dist/aos.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import routersMap from './routers';
import Header from './containers/header'
import Footer from './containers/footer'

function App() {
  return (
    <div className="app">
      <Header />
      <div className="wrapper">
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
        <Footer />
      </div>
    </div>
  );
}

export default App;
