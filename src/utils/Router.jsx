import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Index from '../page/Index';
import Pokemon from '../page/Pokemon';
import ErrorPage from '../page/Error';
import Meteo from "../page/Meteo";
import DefaultTemplate from "../template/DefaultTemplate";

const Router = () => {
    return (<BrowserRouter>
        <DefaultTemplate>

            <Routes>
                <Route path={"/"} element={<Meteo/>}/>
                <Route path={'/pokemon/'} element={<Index/>}/>
                <Route path={'/pokemon/:id'} element={<Pokemon/>}/>
                <Route path={'*'} element={<ErrorPage/>}/>
            </Routes>
        </DefaultTemplate>
    </BrowserRouter>);
};

export default Router;
