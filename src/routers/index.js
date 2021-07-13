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
        /**
         TODO: format của url của 1 page search ta sẽ không sử dụng params, mà sử dụng query-string.
         @link https://reactrouter.com/web/example/query-parameters
         */
        path: '/search',
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