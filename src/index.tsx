/* @refresh reload */
import { render } from 'solid-js/web';
import { Router,hashIntegration } from "@solidjs/router";
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App';

render(() => (
    <Router source={hashIntegration()}>
        <App />
    </Router>
), document.getElementById('root') as HTMLElement);
