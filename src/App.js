import React, { Component } from 'react';
import './App.css';
import LandingPage from './components/LandingPage';
import Transactions from './components/Transactions';

class App extends Component {
    render() {
        return (
            <div className="App">
                <LandingPage />
                <Transactions />
            </div>
        );
    }
}

export default App;
