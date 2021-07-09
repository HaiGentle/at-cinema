// import * as PATHS from './routes';
import HomePage from '../pages/home';
import SearchPage from '../pages/search'
import DetailPgae from '../pages/detail';

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
    },
    {
        path: '/detail/:id',
        component: DetailPgae,
        exact: true,
    }
];

export default routersMap;