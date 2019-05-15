import React from 'react';
const Home = React.lazy(() => import("./page/home"));
const About = React.lazy(() => import("./page/about"));
const AAA = React.lazy(() => import("./page/a"));
const List = React.lazy(() => import("./page/list"));
const Clock = React.lazy(() => import("./page/clock"));
const Clicks = React.lazy(() => import("./page/clicks"));
const Child = React.lazy(() => import("./page/child"));
const RefTest = React.lazy(() => import("./page/refs"));
const RenderProps = React.lazy(() => import("./page/renderProps"));
const PropType = React.lazy(() => import("./page/propType"));

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
    },{
        path: '/clock',
        component: Clock
    },{
        path: '/clicks',
        component: Clicks
    },{
        path: '/child',
        component: Child
    },{
        path: '/reftest',
        component: RefTest
    },{
        path: '/renderProps',
        component: RenderProps
    },{
        path: '/propType',
        component: PropType
    }
];