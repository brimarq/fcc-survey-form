import 'bulmaswatch/materia/bulmaswatch.min.css';
import './style.css';
import './script.js';

const root = document.getElementById('root');

const getIndexHtml = () => require('./index.pug')();
const injectHtml = (element, html) => element.innerHTML = html;

injectHtml(root, getIndexHtml());

if (module.hot) {
  module.hot.accept('./index.pug', function() {
    console.log('PAGE CONTENT CHANGED');
    return injectHtml(root, getIndexHtml());
  });
}
