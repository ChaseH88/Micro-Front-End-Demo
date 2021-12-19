import React from 'react';
import ReactDOM from 'react-dom';

const mount = (element) => {
  ReactDOM.render(
    <div>
      <h1>
        Marketing
      </h1>
    </div>,
    element
  )
}

if (process.env.NODE_ENV === 'development') {

  const devRoot = document.querySelector('#marketing-dev-root');

  if (devRoot) {
    mount(devRoot);
  }

}

export { mount }
