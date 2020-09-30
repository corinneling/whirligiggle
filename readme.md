# whirligiggle

## install & setup
1. Run `npm i whirligiggle`
2. import carousel init function
    - es5 `const init = require('whirligiggle').init;`
    - es6 `import { init } from 'whirligiggle';`

### parameters
1. string: an element's id. The init function adds markup to the page by grabbing the id of an element on the page and adding the carousel markup to the inner html of that element. 
    - So first you need to add a `<div>` to you page with a unique id. For example add `<div id="whirli-caroulsel> </div>` to `index.html`
    - then pass that id value as the first parameter to `init`
    - `init('whirli-carousel')`
2. object: data for the carousel
    - the carousel need to know whether or not to show the arrow buttons and/or the dot navigation, which you can do by adding the keys `showDots` and `showButtons` to your data object, both set to the value of true
    - it also needs to know how many slides there are going to be, and the html to be added to those slide
    - here is an example of a data object, you can have as many entries in the slide array as you want, each new object in the slide array creates a new slide
      ```
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
      ```
   - now pass the data object to the init function `init('whirli-carousel', data)`

### styles

TO DO: add docs on styles once i figure out how styles will work