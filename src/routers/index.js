import * as PATHS from './routers'
import HomePage from '../pages/home';
import SearchPage from '../pages/search'
import DetailPage from '../pages/detail';

const routersMap = [
    {
        path: PATHS.HomePage,
        component: HomePage,
        exact: true,
    },
    {
        path: PATHS.SearchPage,
        component: SearchPage,
        exact: true,
    },
    {
        path: PATHS.DetailPage,
        component: DetailPage,
        exact: true,
    }
];

export default routersMap;