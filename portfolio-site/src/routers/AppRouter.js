import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from '../components/Header.jsx';
import HomePage from '../components/HomePage.jsx';
import PortfolioPage from '../components/PortfolioPage.jsx';
import PortfolioItemPage from '../components/PortfolioItemPage.jsx';
import ContactPage from '../components/ContactPage.jsx';
import NotFoundPage from '../components/NotFoundPage.jsx';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <div className="container">
                <Switch>
                    <Route path="/" component={HomePage} exact={true} />
                    <Route path="/portfolio" component={PortfolioPage} exact={true} />
                    <Route path="/portfolio/:id" component={PortfolioItemPage} />
                    <Route path="/contact" component={ContactPage} />
                    <Route component={NotFoundPage} />
                </Switch>
            </div>
        </div>
    </BrowserRouter>
);

export default AppRouter;