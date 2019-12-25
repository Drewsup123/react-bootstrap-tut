import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import News from './components/News';
// import Navbar from './components/Navbar'

function App() {
	return (
        <Router>
            <div>
            	<Route exact path="/" render={() => <Home />} />
				<Route path="/about" render={() => <About />} />
				<Route path="/news" render={() => <News />} />
            </div>
        </Router>
    );
}

export default App;
