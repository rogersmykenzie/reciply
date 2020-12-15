import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import routes from 'src/routes';

export function App(props) {
  return <BrowserRouter>{routes}</BrowserRouter>;
}

export default App;
