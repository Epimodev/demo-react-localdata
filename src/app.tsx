import { createElement } from 'react';
import { render } from 'react-dom';
import Application from './Application';

const appContainer = document.getElementById('app');

// if ('serviceWorker' in navigator) {
//   navigator.serviceWorker.register('./service-worker.js');
// }

if (appContainer) {
  render(<Application />, appContainer);
}
