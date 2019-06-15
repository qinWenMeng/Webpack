// import './resources/css/style.css';
import 'Css/style.css';
import 'Css/index.scss';
import greet from './components/greet/greet.js';
import github from './components/github/github.js';

function component() {
  let element = document.createElement('div');
  element.setAttribute('id', 'app');

  element.appendChild(greet);
  element.appendChild(github);

  return element;
}

document.body.appendChild(component());
