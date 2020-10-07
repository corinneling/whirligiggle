import { init } from '../index';

const data = {
  showDots: true,
  showButtons: true,
  slides: [{
    content: `
      <h2 class="carousel-header carousel-header--block">slide one</h2>
      <div class="carousel-content carousel-content--block">some paragraph text for the demo</div>
      <div class="attribute">
        Background Photo by <a href="https://www.pexels.com/@mccutcheon?utm_content=attributionCopyText&utm_medium=referral&utm_source=pexels">Sharon McCutcheon</a>
      </div>
    `
  },{
    content: `
      <div class="column-right">
        <h2>slide two</h2>
        <ul>
          <li>point one</li>
          <li>point two</li>
          <li>point three</li>
        </ul>
      </div>
      <div class="attribute">
        Background Photo by <a href="https://www.pexels.com/@francesco-ungaro?utm_content=attributionCopyText&utm_medium=referral&utm_source=pexels">Francesco Ungaro</a>
      </div>
    `
  },{
    content: `
      <h2>slide three</h2>
      <div class="attribute">
        Background Photo by <a href="https://unsplash.com/@ctj?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Cecilie Johnsen</a>
      </div>
    `
  }]
}

init('whirli-carousel', data);
