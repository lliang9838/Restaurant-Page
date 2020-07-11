import {elements} from './base';

export const  loadHeader = () => {
  console.log('loading header');
  
  const markup=
  `<div class="header">
        <div style="margin-left: 30px">Title</div>
        <div>Image</div>
        <div style="margin-right: 30px" class="nav">
            <p>Home</p>
            <p>Menu</p>
            <p>Contact</p>
        </div>
  </div>`

  elements.content.insertAdjacentHTML('beforeend', markup)
}

