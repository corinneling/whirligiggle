import { init } from '../index';

const data = {
  showDots: true,
  showButtons: true,
  slides: [{
    content: `
      <h2 class="carousel-header carousel-header--block">sldie one</h2>
      <p class="carousel-content carousel-content--block">some paragraph text for the demo</p>
    `
  },{
    content: `
      <div class="column-right">
        <h2>sldie two</h2>
        <ul>
          <li>point one</li>
          <li>point two</li>
          <li>point three</li>
        </ul>
      </div>
    `
  },{
    content: `<h2>sldie three</h2>`
  }]
}

init('whirli-carousel', data);
