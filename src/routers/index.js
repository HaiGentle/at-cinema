// import * as PATHS from './routes';
import HomePage from '../pages/home';

const routersMap = [
    {
        path: '/',
        component: HomePage,
        exact: true,
    },
    {
        path: '/search/:id',
        component: HomePage,
        exact: true,
    }
];

export default routersMap;