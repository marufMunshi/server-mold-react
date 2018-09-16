import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from '../components/HomePage';
import WordPressPlanDetailsPage from '../components/WordPressPlanDetailsPage';
import CloudPlanDetailsPage from '../components/CloudPlanDetailsPage';
import NotFoundPage from '../components/NotFoundPage';

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' component={HomePage} exact={true} />
                <Route path='/wordPress-plans' component={WordPressPlanDetailsPage} />
                <Route path='/cloud-plans' component={CloudPlanDetailsPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </BrowserRouter>
    )
};

export default AppRouter;