/* // import './resources/css/style.css';
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
 */

// function getComponent() {
//   return import(/* webpackChunkName: "lodash" */ 'lodash').then(({ default: _ }) => {
//     let element = document.createElement('div');
//     element.innerHTML = _.join(['Hello', 'webpack'], ' ');
//     return element;
//   }).catch(error => 'An error occurred while loading the component');
// }

// import() 会返回一个 promise，因此它可以和 async 函数一起使用。
async function getComponent() {
  let element = document.createElement('button');

  const { default: _ } = await import(/* webpackChunkName: "lodash" */ 'lodash');
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  element.onclick = e => import(/* webpackChunkName: "lazyLoad" */ './lazyLoad').then(module => {
    var print = module.default;
    print();
  });

  return element;
}

getComponent().then(component => {
  document.body.appendChild(component);
});
