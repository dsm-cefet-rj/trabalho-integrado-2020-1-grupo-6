import { render } from '@testing-library/react';
import { Provider } from "react-redux";
import {store} from './store/index'
import { Routes } from "./routes";
import ReactDOM from "react-dom";
import React from 'react';
import App from './App';


test('Renderiza a app', () => {
  const { getByText } = render(
    <Routes store={store}>
    <App />
    </Routes>
  );
  const labelElement = getByText(/TaskBoard/i)
  expect(labelElement).toBeInTheDocument()
});