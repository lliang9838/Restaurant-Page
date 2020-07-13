import {loadHeader} from './header';
import {loadHome, loadMenu, loadContact} from './body';
import {elements} from './base';

// loadHeader();
// loadHome();

console.log('index.js');

elements.content.addEventListener('click', e => {
  if(e.target.matches('.home, .home *')){
    elements.content.innerHTML = '';
    loadHeader();
    loadHome();
    document.querySelector('.home').classList.add('active-link');
  }

  if(e.target.matches('.menu, .menu *')){
    elements.content.innerHTML = '';
    loadHeader();
    loadMenu();
    document.querySelector('.menu').classList.add('active-link');
  }

  if(e.target.matches('.contact, .contact *')){
    elements.content.innerHTML = '';
    loadHeader();
    loadContact();
    document.querySelector('.contact').classList.add('active-link');
  } 
});

const pizza = document.querySelector('#pizza_arrow_down');
  pizza.addEventListener('click', e => {
    pizza.textContent = pizza.textContent === "arrow_drop_down" ? "arrow_drop_up": "arrow_drop_down";
    document.querySelector('.pizza-dish').style.display =
    document.querySelector('.pizza-dish').style.display === "block" ? "none" : "block";
  });
