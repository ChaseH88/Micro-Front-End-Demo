import React from 'react';
import ReactDOM from 'react-dom';

// Components
import { App } from './app';

const mount = (element) => {
  ReactDOM.render(<App />, element)
}

if (process.env.NODE_ENV === 'development') {

  const devRoot = document.querySelector('#marketing-dev-root');

  if (devRoot) {
    mount(devRoot);
  }

}

export { mount }
