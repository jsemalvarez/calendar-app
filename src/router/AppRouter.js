import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link, 
    Redirect
  } from "react-router-dom";
import { LoginScreen } from '../components/auth/LoginScreen';
import { CalendarScreen } from '../components/calendar/CalendarScreen';

export const AppRouter = () => {
    return (
        <Router>
            <div>

                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/login">About</Link>
                        </li>          
                    </ul>
                </nav>

                {/* A <Switch> looks through its children <Route>s and
                    renders the first one that matches the current URL. */}
                <Switch>
                    <Route path="/login" component={ LoginScreen } />
                             
                    <Route path="/">
                        <CalendarScreen />
                    </Route>

                    <Redirect to="/" />
                </Switch>

            </div>
        </Router>
    )
}
