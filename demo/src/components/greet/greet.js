import _ from 'lodash';
import './greet.scss';

let p = document.createElement('p');
p.innerHTML = _.join(['Hello', 'webpack', '!'], ' ');
p.classList.add('hello');

export default p;
