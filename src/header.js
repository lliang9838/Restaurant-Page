import {elements} from './base';

export const  loadHeader = () => {
  console.log('loading header');
  
  const markup=
   `<div class="header">
      <h1 style="margin-left: 30px">Pazzo Pizzeria</h1>
      <img id="pazzo" src='./img/pazzo.jpeg' alt="pazzo pizzeria">
      <div style="margin-right: 30px" class="nav">
        <a class="nav-link home">
          <span class="text-shadow">Home</span>
        </a>
        <a class="nav-link menu">
          Menu
        </a>
        <a class="nav-link contact">
          Contact
        </a>
      </div>
    </div>
    `

  elements.content.insertAdjacentHTML('beforeend', markup)
}

