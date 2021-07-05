// import * as PATHS from './routes';
import HomePage from '../pages/home';
import SearchPage from '../pages/search'

const routersMap = [
    {
        path: '/',
        component: HomePage,
        exact: true,
    },
    {
        path: '/search/:id',
        component: SearchPage,
        exact: true,
    }
];

export default routersMap;