function printMe() {
  console.log('I get called from print.js!');
}

let element = document.querySelector('#main');

let btn = document.createElement('button');
btn.innerHTML = '点击这里，然后查看 console！';
btn.onclick = printMe;

element.appendChild(btn);
