import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import store from "./components/redux/reduxStore";
import StoreContext, {Provider} from "./StoreContext";

const root = ReactDOM.createRoot(document.getElementById('root'));

let rootRender = (store) => {

    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <Provider store={store}>
                    <App />
                </Provider>
            </BrowserRouter>
        </React.StrictMode>
    );
    /*<App
        store={store}
        state={store.getState()}
        dispatch={store.dispatch.bind(store)}
    />*/
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
    reportWebVitals();
}

rootRender(store)
store.subscribe(() => {
        rootRender(store)
    }
)

