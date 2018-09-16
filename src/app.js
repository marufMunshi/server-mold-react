import React from 'react';
import ReactDom from 'react-dom';
import './styles/app.scss';
import AppRouter from './routers/AppRouter';


const jsx = (
    <AppRouter />
);

ReactDom.render(jsx, document.getElementById('app'));