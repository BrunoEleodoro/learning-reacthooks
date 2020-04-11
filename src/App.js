import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from "./pages/home/Home"
import { Client as Styletron } from 'styletron-engine-atomic';
import { Provider as StyletronProvider } from 'styletron-react';
import { LightTheme, DarkTheme, BaseProvider, styled } from 'baseui';
import AppBar from './components/AppBar';

const engine = new Styletron();

function App() {

    return (
        <StyletronProvider value={engine}>
            <BaseProvider theme={LightTheme}>
                {AppBar()}
                {/* <Button onClick={() => {
                if (theme == 1) {
                    changeTheme(0)
                } else {
                    changeTheme(1)
                }
            }}>Change</Button> */}
            </BaseProvider>
        </StyletronProvider>
    );
}

export default App;
