import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    const [nome, setNome] = useState('bruno');

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    {nome}
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
        </a>
                <button onClick={() =>setNome('Carlos')} >Clique</button>
            </header>
        </div>
    );
}

export default App;
