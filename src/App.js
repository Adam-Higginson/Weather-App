import React, {lazy, Suspense} from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

const About = lazy(() => import( "./components/About"));
const WeatherFormHolder = lazy(() => import("./components/WeatherFormHolder"));

function App() {
    return (
        <Router>
            <Suspense fallback={<div>Loading...</div>}>
                <nav>
                    <ul>
                        <li>
                            <Link to="/weather">Weather</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                    </ul>
                </nav>

                <Switch>
                    <Route path="/weather">
                        <WeatherFormHolder/>
                    </Route>
                    <Route path="/about">
                        <About/>
                    </Route>
                </Switch>
            </Suspense>
        </Router>
    );
}

export default App;
