import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import { CustomNavbar } from './components/CustomNavbar.js';
import NoMatch from './components/NoMatch';
import { Layout } from './components/Layout';
import { Jumbotron } from './components/Jumbotron';

function App() {
	return (
        <React.Fragment>
            <CustomNavbar />
            <Jumbotron />
            <Layout>
                <Router>
                    <Switch>
                        <Route exact path="/" render={() => <Home />} />
                        <Route path="/about" render={() => <About />} />
                        <Route path="/contact" render={() => <Contact />} />
                        <Route component={NoMatch} />
                    </Switch>
                </Router>
            </Layout>
        </React.Fragment>
    );
}

export default App;
