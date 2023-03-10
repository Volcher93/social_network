// import store from "./redux/Store";
import store from "./redux/redux-store";
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";

const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <Provider store={store}>
                    {/*<App state={state} dispatch={store.dispatch.bind(store)} store={store}/>*/}
                    <App/>
                </Provider>
            </BrowserRouter>
        </React.StrictMode>
    );
