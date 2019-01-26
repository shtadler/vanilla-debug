import Concater from './form/concater';
import './index.scss';

// create new instance of concater with form link
const concater = new Concater(document.forms[0]);

const button = document.querySelector('.button-ok');
// some action on click
button.addEventListener('click', () => concater.getFullName());


// async breakpoint
// XHR/fetch breakpoints, and manual breakpoint in callback
fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json));


// subtree modification breakpoint
const container = document.getElementById('addChild');
container.addEventListener('click', () => {
  const newLi = document.createElement('span');
  newLi.innerHTML = 'Привет, мир!';

  container.appendChild(newLi);
});