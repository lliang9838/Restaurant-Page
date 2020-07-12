import {elements} from './base';

export const  loadHome = () => {
  console.log('loading home');
  
  const markup=
  `<div class="body">
        <div id="intro">
          <img id="pepperoni" src='./img/pepperoni.jpg' alt="pepperoni pizza">
            <h1 style="margin: auto; text-align: center">Homemade Organic Pepperoni Pizza</h1>
        </div>
        <div id="about">
            <h1 style="font-size: 24px;">Who are we?</h1>
            <p style="font-family: Comfortaa; padding: 0 20px; display: inline-block; margin: 0px;">
              <span style="background-color: rgb(246, 250, 173)">Pazzo Pizzeria</span> is a family owned chain restaurant who offers authentic 
              Italian food. The dough is prepared every morning meaning you will always be getting the cream of the crop every time you step 
              into the restaurant. Handmade pizza, pasta and sandwiches guarantees you with a 
              <span style="background-color: rgb(246, 250, 173)">smile</span> after every <span style="background-color: rgb(246, 250, 173)">
              meal</span>.<p>
            <h1 style="font-size: 24px; margin-top: 50px">What is it?</h1>
            <p style="font-family: Comfortaa; padding: 0 20px; display: inline-block; margin: 0px;">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Duis at consectetur lorem donec massa sapien faucibus et. Vel risus commodo viverra maecenas accumsan lacus.
            <p>
            <h1 style="font-size: 24px; margin-top: 50px">Where can I get it?</h1>
            <p style="font-family: Comfortaa; padding: 0 20px; display: inline-block; margin: 0px; margin-bottom: 40px;">
              This is a programming exercise made by <a target="_blank" rel="noopener noreferrer" href="https://leslieliang.dev/" 
              style="background-color: rgb(185, 233, 247); text-decoration: none; color: var(--primary);">Leslie Liang</a> and in no
              way is he representing Pazzo Pizzeria. <span style="background-color: rgb(250, 215, 195)">DOM Manipulation,
              Vanilla JavaScript, HTML, CSS and Flexboxes</span> were used in this project. Web design was inspired by 
              <a target="_blank" rel="noopener noreferrer" href="https://hridaykedia.github.io/Restaurant/#"
                style="background-color: rgb(185, 233, 247); text-decoration: none; color: var(--primary);">@hridaykedia</a>
            <p>
        </div>
    </div>`

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