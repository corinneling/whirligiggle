# whirligiggle (work in progress)
This package is a work in progress and not ready for production. We will update it to version 1.0.0 when it is ready.

[![Netlify Status](https://api.netlify.com/api/v1/badges/ef7c8b68-f63c-4e2a-8e3e-aebd230e5424/deploy-status)](https://app.netlify.com/sites/whirligiggle/deploys)

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
      ```js
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
**TO DO: finish docs on styles once i figure out how styles will work.**

- whirligigggle is currently dependent on sass. To set up sass for your project follow [this tutorial](https://dev.to/chrissiemhrk/how-to-setup-sass-in-your-project-2bo1)

1. import `styles.scss` into your project's sass file with the following path `../node_modules/whirligiggle/src/scss/styles`
2. To override styles you can create a new sass file, add those overrides to it, and then import that sass file after the whirligiggle file like this:
    ```
    @import '../node_modules/whirligiggle/src/scss/styles';
    @import 'mycarouselfile'
    ```
3. To add background images to each slide use the generated whirligiggle classes. Each slide is given a unique class based on it's index. So the first slide will have the class `whirli-slide--1`. The second slide will have the class `whirli-slide--2` etc.
    - For an example check out the demo styles in the repo: https://github.com/corinneling/whirligig/blob/master/src/demo.scss
5. Sass variables are used for colors. To override colors check out what [variables we have](https://github.com/corinneling/whirligig/blob/master/src/scss/_variables.scss) and reset them in your project.
    ```scss
    // whirligiggle/src/styles.scss
    $c-button-primary: #121212;

    // mycarouselfile.scss
    $c-button-primary: hotpink;
    ```

## slide content
- the content for each slide is completely customizable
- Add whatever html elements and content you want to each slide via the data object (the second parameter for the init function)
    - use a [template literal](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals) as the value for the `content` key. For example:
    ```js
    const data = {
      showDots: true,
      showButtons: true,
      slides: [{
        content: `
          <h2 class="carousel-header carousel-header--block">sldie one</h2>
          <p class="carousel-content carousel-content--block">some paragraph text for the demo</p>
        `
      }]
    }
    ```

    **TO DO: testing**