import {elements} from './base';

export const  loadBody = () => {
  console.log('loading body');
  
  const markup=
  `<div class="body"></div>`

  elements.content.insertAdjacentHTML('beforeend', markup)
}

