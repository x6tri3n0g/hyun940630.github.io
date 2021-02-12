import React from 'react';
import TopNavigation from 'components/TopNavigation';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from 'pages/Home';

const Root: React.FC = () => {
    return (
        <Router>
            <TopNavigation />
            <Switch>
                <Route path="/" component={Home} exact />
                {/* <Route path="/benz" component={Home} exact /> */}
            </Switch>
        </Router>
    );
};

export default Root;
