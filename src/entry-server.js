// src/entry-server.js
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import App from './App.jsx';

export function render(url) {
  const helmetContext = {};
  // Usamos React.createElement en lugar de JSX para que Node pueda ejecutarlo
  const html = renderToString(
    React.createElement(
      HelmetProvider,
      { context: helmetContext },
      React.createElement(
        StaticRouter,
        { location: url },
        React.createElement(App)
      )
    )
  );
  return { html };
}