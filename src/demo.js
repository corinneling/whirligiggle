const init = require('../bundle-rollup').init;

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
  },{
    content: `<p>slide four</p>
      <div class="attribute">
        Background Photo by <a href="https://www.pexels.com/@calebemirandafotografia?utm_content=attributionCopyText&utm_medium=referral&utm_source=pexels">Calebe Miranda</a>
      </div>
    `
  },{
    content: `<p>slide five</p>
      <div class="attribute">
        Background Photo by <a href="https://www.pexels.com/@creapark-187589?utm_content=attributionCopyText&utm_medium=referral&utm_source=pexels">CreaPark</a>
      </div>
    `
  },{
    content: `<p>slide six</p>
      <div class="attribute">
        Background Photo by <a href="https://www.pexels.com/@jill-wellington-1638660?utm_content=attributionCopyText&utm_medium=referral&utm_source=pexels">Jill Wellington</a>
      </div>
    `
  },{
    content: `<p>slide seven</p>
      <div class="attribute">
        Background Photo by <a href="https://www.pexels.com/@nurseryart?utm_content=attributionCopyText&utm_medium=referral&utm_source=pexels">Porapak Apichodilok</a>
      </div>
    `
  },{
    content: `<p>slide eight</p>
      <div class="attribute">
        Background Photo by <a href="https://www.pexels.com/@amolmande?utm_content=attributionCopyText&utm_medium=referral&utm_source=pexels">Amol Mande</a>
      </div>
    `
  },{
    content: `<p>slide nine</p>
      <div class="attribute">
        Background Photo by <a href="https://www.pexels.com/@ivan-torres-594557?utm_content=attributionCopyText&utm_medium=referral&utm_source=pexels">Ivan Torres</a>
      </div>
    `
  },{
    content: `<p>slide ten</p>
      <div class="attribute">
        Background Photo by <a href="https://www.pexels.com/@arunbabuthomas?utm_content=attributionCopyText&utm_medium=referral&utm_source=pexels">Arun Thomas</a>
      </div>
    `
  }
]
}

init('whirli-carousel', data);
