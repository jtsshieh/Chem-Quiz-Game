import React from "react";
import ReactDOM from "react-dom/client";
import App from "./index_route";
import { CssVarsProvider } from '@mui/joy/styles';
import CssBaseline from '@mui/joy/CssBaseline';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import EmpiricalFormula from "./empirical_formula";
import PressureCalculation from './pressure_calculation';
import WeakAConjB from './buffer_calculations/weakAConjB';
import FormulaNaming from './formula_naming/formula_naming';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />
    },
    {
        path: '/empirical-formula',
        element: <EmpiricalFormula />
    },
    {
        path: '/pressure',
        element: <PressureCalculation />
    },
    {
        path: '/buffers',
        element: <WeakAConjB />
    },
    {
        path: '/formula-naming',
        element: <FormulaNaming />
    }
]);


ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
        <CssVarsProvider defaultMode="system">
            <CssBaseline />
            <RouterProvider router={router} />
        </CssVarsProvider>
  </React.StrictMode>
);
