import {elements} from './base';

export const  loadHome = () => {
  console.log('loading home');
  
  const markup=
  `<div class="body"><p>home</p></div>`

  elements.content.insertAdjacentHTML('beforeend', markup)
}

export const  loadMenu = () => {
  console.log('loading home');
  
  const markup=
  `<div class="body"><p>menu</p></div>`

  elements.content.insertAdjacentHTML('beforeend', markup)
}

export const  loadContact = () => {
  console.log('loading contact');
  
  const markup=
  `<div class="body"><p>contact</p></div>`

  elements.content.insertAdjacentHTML('beforeend', markup)
}