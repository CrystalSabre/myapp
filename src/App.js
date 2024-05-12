import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home';
import Books from './Books';
import Return from './Return';

const App = () => {
    return (
        <Router>
            <div>
                <Route exact path="/" component={Home} />
                <Route path="/books" component={Books} />
                <Route path="/return" component={Return} />
            </div>
        </Router>
    );
};

export default App;
