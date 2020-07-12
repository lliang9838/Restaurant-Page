import {loadHeader} from './header';
import {loadHome, loadMenu, loadContact} from './body';
import {elements} from './base';

loadHeader();
loadHome();

console.log('index.js');

elements.content.addEventListener('click', e => {
  console.log('yoo')
  e.preventDefault();
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

// elements.menu.addEventListener('click', e => {
//     e.preventDefault();
//     console.log('menu was clicked');
//     elements.content.innerHTML = '';
//     loadHeader();
//     loadMenu();
// });

// elements.contact.addEventListener('click', e => {
//     e.preventDefault();
//     console.log('contact was clicked');
//     elements.content.innerHTML = '';
//     loadHeader();
//     loadContact();
// });