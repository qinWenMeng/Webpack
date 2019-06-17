/* function printMe() {
  console.log('I get called from print.js!');
}

function component() {
  let element = document.createElement('div');
  element.setAttribute('id', 'print');

  let btn = document.createElement('button');
  btn.innerHTML = '点击这里，然后查看 console！';
  btn.onclick = printMe;

  element.appendChild(btn);

  return element;
}

document.body.appendChild(component());
 */
import { cube } from './math.js';
export default function printMe() {
  console.log('%c I get called from print.js!', 'color: blue;');
  console.log('%c unused harmony export:', 'color: red;', cube(2));
}
