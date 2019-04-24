import Home from "./page/home";
import About from "./page/about";
import AAA from "./page/a";
import List from "./page/list";

export default [
    {
        path: '/',
        component: Home
    },
    {
        path: '/home',
        component: Home
    }, {
        path: '/about',
        component: About,
        routes: [{
            path: '/about/a',
            component: AAA
        }]
    },{
        path: '/list',
        component: List
    }
];