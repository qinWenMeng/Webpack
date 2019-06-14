import _ from 'lodash';
import './resources/css/style.css';
import './resources/css/style.scss';
import github from './resources/images/github.png';

function component() {
  let element = document.createElement('div');
  element.setAttribute('id', 'main');

  let p = document.createElement('p');
  p.innerHTML = _.join(['Hello', 'webpack', '!'], ' ');
  p.classList.add('hello');

  let myImg = new Image();
  myImg.width = 100;
  myImg.height = 100;
  myImg.src = github;

  element.appendChild(p);
  element.appendChild(myImg);

  return element;
}

document.body.appendChild(component());
