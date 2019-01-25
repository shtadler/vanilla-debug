import Concater from './form/concater';
import './index.scss';

const concater = new Concater(document.forms[0]);

const button = document.querySelector('.button-ok');
button.addEventListener('click', concater.getFullName);