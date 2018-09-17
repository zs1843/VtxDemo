import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import dynamic from 'dva/dynamic';

const routes = [
    {
        path: '/',
        component: () => import('./routes/IndexPage'),
    },
    {
        path: '/VtxDemo',
        component: () => import('./routes/VtxDemoPage/VtxDemoPage'),
    },
    {
        path: '/map',
        component: () => import('./routes/Map/map'),
    },
    {
        path: '/input',
        component: () => import('./routes/Input/input'),
    }
];

function RouterConfig({ history, app }) {
    return (
        <Router history={history}>
            <Switch>
                {
                    routes.map(({ path, ...dynamics }, key) => (
                        <Route
                            key={key}
                            exact
                            path={path}
                            component={dynamic({
                                app,
                                ...dynamics,
                            })}
                        />
                    ))
                }
            </Switch>
        </Router>
    );
}

export default RouterConfig;
