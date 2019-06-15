// import './resources/css/style.css';
import 'Css/style.css';
import 'Css/index.scss';
import greet from './components/greet/greet.js';
import github from './components/github/github.js';
import printMe from './print.js';

function component() {
  let element = document.createElement('div');
  element.setAttribute('id', 'app');

  let btn = document.createElement('button');
  btn.innerHTML = '点击这里，然后查看 console！';
  btn.onclick = printMe;

  element.appendChild(greet);
  element.appendChild(github);
  element.appendChild(btn);

  return element;
}

let element = component();
document.body.appendChild(element);

if (module.hot) {
  module.hot.accept('./print.js', function () {
    console.log('%c Accepting the updated printMe module!', 'color:red;');
    document.body.removeChild(element);
    element = component(); // 重新渲染 "component"，以便更新 click 事件处理函数
    document.body.appendChild(element);
  })
}
