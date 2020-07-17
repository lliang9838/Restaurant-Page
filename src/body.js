import { elements } from "./base";

export const loadHome = () => {
  const markup = `<div class="body">
        <div id="intro">
          <img id="pepperoni" src='./img/pepperoni.jpg' alt="pepperoni pizza">
            <h1 style="margin: auto; text-align: center">Homemade Organic Pepperoni Pizza</h1>
        </div>
        <div id="about">
            <h1 style="font-size: 24px;">Who are we?</h1>
            <p style="font-family: Comfortaa; padding: 0 20px; display: inline-block; margin: 0px;">
              <span style="background-color: rgb(246, 250, 173)">Pazzo Pizzeria</span> is a family owned chain restaurant who offers authentic 
              Italian food. The dough is prepared every morning meaning you will always get the cream of the crop every time you step 
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
              Vanilla JavaScript, HTML, CSS and Flexboxes</span> were used in this project. Compiled using webpack and deployed on Firebase. 
              Web design was inspired by 
              <a target="_blank" rel="noopener noreferrer" href="https://hridaykedia.github.io/Restaurant/#"
                style="background-color: rgb(185, 233, 247); text-decoration: none; color: var(--primary);">@hridaykedia</a>.
            <p>
        </div>
    </div>`;

  elements.content.insertAdjacentHTML("beforeend", markup);
  document.querySelector(".home").classList.add("active-link");
};

export const loadMenu = () => {
  const markup = `<div class="body">
        <div class="menu-section">
          <div class="dish">
            <div style="background-color: rgb(246, 250, 173);" class="dish-header">
              <div>
                <h2><span id="pizza_arrow_down" style="font-size: 32px; cursor: pointer;" class="material-icons">
                  arrow_drop_down
                </span>Neopolitan Style Pizza</h2>
              </div>
              <div class="price">
                <h3>$</h3>
                <h4>22</h4>
              </div>
            </div>
            <div class="pizza-dish">
              <img style="width: 100%; border-radius: 15px;" src='./img/neopolitan.jpg' alt="pazzo pizzeria">
            </div>
            <div style="margin-top: 20px; font-family: Comfortaa;">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Sed nec faucibus magna. Vestibulum elementum porta sagittis. Pellentesque malesuada tortor ut risus euismod
              sollicitudin.
            </div>
          </div>
          <div class="dish" style="margin-top: 30px;" >
            <div style="background-color: rgb(250, 215, 195);" class="dish-header">
              <div>
                <h2><span id="pizza_arrow_down" style="font-size: 32px; cursor: pointer;" class="material-icons">
                    arrow_drop_down
                  </span>California Style Pizza</h2>
              </div>
              <div class="price">
                <h3>$</h3>
                <h4>22</h4>
              </div>
            </div>
            <div class="pizza-dish">
              <img style="width: 100%; border-radius: 15px;" src='./img/california.jpg' alt="pazzo pizzeria">
            </div>
            <div style="margin-top: 20px; font-family: Comfortaa;">
              Nulla rhoncus arcu sit amet mauris blandit, ut consequat elit consectetur. Duis sed fringilla est, et viverra quam. Nam
              nec sodales augue. Suspendisse sapien nulla, pulvinar et imperdiet eu, cursus quis ante. Nullam iaculis iaculis
              tristique. Donec sem orci, convallis in gravida sit amet, pharetra eu nibh.
            </div>
          </div>
          <div class="dish" style="margin-top: 30px;">
            <div style="background-color: rgb(185, 233, 247);" class="dish-header">
              <div>
                <h2><span id="pizza_arrow_down" style="font-size: 32px; cursor: pointer;" class="material-icons">
                    arrow_drop_down
                  </span>Chicken Alfredo</h2>
              </div>
              <div class="price">
                <h3>$</h3>
                <h4>22</h4>
              </div>
            </div>
            <div class="pizza-dish">
              <img style="width: 100%; border-radius: 15px;" src='./img/alfredo.jpg' alt="pazzo pizzeria">
            </div>
            <div style="margin-top: 20px; font-family: Comfortaa;">
              Duis nec pellentesque magna. Suspendisse eu mi sit amet magna dictum lobortis rhoncus aliquam dui. Vestibulum purus
              nunc, faucibus eget tempus a, aliquet id nibh. Maecenas ultrices faucibus convallis. Proin eu dapibus est. 
            </div>
          </div>
        </div>
    </div>`;

  elements.content.insertAdjacentHTML("beforeend", markup);

  const dishes = document.querySelectorAll("#pizza_arrow_down");

  dishes.forEach((dish) => {
    dish.addEventListener("click", (e) => {
      dish.textContent =
        dish.textContent === "arrow_drop_down"
          ? "arrow_drop_up"
          : "arrow_drop_down";

      let image =
        dish.parentElement.parentElement.parentElement.parentElement
          .childNodes[3];
      image.style.display = image.style.display === "block" ? "none" : "block";
    });
  });
};

export const loadContact = () => {
  const markup = `
  <div class="body">
    <div id="about">
      <div>
        <div style="display: inline-block"> 
          <span style="font-size: 28px;">Delivery and Pickup</span>
          <br>
          <span style="font-size: 28px; background-color: rgb(185, 233, 247);">Monday - Sunday</span>
          <br>
          <span style="font-size: 28px;">From 10AM to 10PM</span>
        </div>
      </div>
      <div>
        <div style="display: inline-block; margin-top: 60px;">
          <span style="font-size: 32px;">Place Your Order</span>
          <br>
          <a target="_blank" rel="noopener noreferrer" href="https://leslieliang.dev"
            style="background-color: rgb(185, 233, 247); 
            text-decoration: none; color: var(--primary); font-size: 30px;">Online</a>
          <br>
          <span style="font-size: 28px; background-color: rgb(185, 233, 247);">Or On Instagram</span>
          <br>
          <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/bigballerleslie/" 
          style="text-decoration: none; color: var(--primary); font-size: 30px;">@bigballerleslie</a>
        </div>
      </div>
      <div>
        <div style="display: inline-block; margin-top: 60px; margin-bottom: 80px;">
          <span style="font-size: 26px;">Order Placing From </span>
          <br>
          <span style="font-size: 26px; background-color: rgb(250, 215, 195);">Monday 'Til Friday 3pm</span>
        </div>
      </div>
    </div>
  </div>
  `;

  elements.content.insertAdjacentHTML("beforeend", markup);
};
