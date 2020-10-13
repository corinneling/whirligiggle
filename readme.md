# whirligiggle (wip)
An accessible, performant, mobile friendly carousel. Like a whirligig, but a little more fun! :rainbow:

This package is a work in progress and not ready for production. We will update it to version 1.0.0 when it is ready.

[![Netlify Status](https://api.netlify.com/api/v1/badges/ef7c8b68-f63c-4e2a-8e3e-aebd230e5424/deploy-status)](https://app.netlify.com/sites/whirligiggle/deploys)

- [carousel features](#carousel-features)
- [install and setup](#install)
- [parameters](#parameters)
- [styles](#styles)
- [supported browsers](#supported-browsers)
- [to do](#TO-DO)

## Carousel Features
The following features are available for all users including keyboard and screen reader users. To see them in action, check out the [demo site](https://whirligiggle.netlify.app/).

- arrow button navigation
- dot button navigation 
- tooltip on each dot to communicate what slide that dot will take you to
- focus added to the slide once it is navigated to with an aria-label to notify users what slide they are on
- removes focus from links on hidden slides so the tab order is not disrupted
- the markup and background pictures for each slide is completely customizable
- default styles, including colors, for the carousel can be overridden
- links on slides that are hidden are not tabbable so tab order is not messed up


## Install
1. Run `npm i whirligiggle`
2. import carousel init function
    - es5 `const init = require('whirligiggle').init;`
    - es6 `import { init } from 'whirligiggle';`



## Parameters
1. a string: the init function works by grabbing the id of an element on the page and adding the carousel markup to the inner html of that element

    ```html
    <!--your index.html-->
    <div id="my-awesome-carousel"></div>
    ```
    ```js
    // your index.js
    import { init } from 'whirligiggle';
    init('my-awesome-carousel');
    ```

2. an object: data for the carousel
   - Add whatever html elements and content you want to each slide with a [template literal](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals) as the value for the `content` key (see example below)

      ```html
      <!--your index.html-->
      <div id="my-awesome-carousel"></div>
      ```
      ```js
      // your index.js
      import { init } from 'whirligiggle';

      const slideData = {
        showDots: true, // show the dot nav beneath the carousel
        showButtons: true, // show the arrow buttons on either side of the carousel
        // each object in the slides array creates a new slide
        slides: [{ 
          content: `
            <h2 class="carousel-header carousel-header--block">sldie one</h2>
            <p class="carousel-content carousel-content--block">some paragraph text for the demo</p>
          `
        },{
          content: `
            <div class="column-right">
              <h2>sldie two</h2>
              <a href="#">contact us</a>
            </div>
          `
        },{
          content: `<h2>sldie three</h2>`
        }]
      }

      init('my-awesome-carousel', slideData);
      ```


## Styles
whirligigggle is currently dependent on sass. To set up sass for your project follow [this tutorial](https://dev.to/chrissiemhrk/how-to-setup-sass-in-your-project-2bo1)

### Import Styles
import our sass file with the following path `../node_modules/whirligiggle/src/scss/styles`. You can override our styles by creating a new sass file in your project. Import that sass file after the whirligiggle style file.
  ```scss
  // your base.scss
  @import '../node_modules/whirligiggle/src/scss/styles';
  @import './src/scss/my-carousel-styles';
  ```

### Colors
Sass variables are used for this package's colors. To override colors check out what [variables we have](https://github.com/corinneling/whirligig/blob/master/src/scss/_variables.scss) and reset them in your project.
  ```scss
  // whirligiggle/src/scss/styles.scss
  $c-button-primary: #121212;

  // my-carousel-styles.scss
  $c-button-primary: hotpink;
  ```
  ```scss
  // your base.scss
  @import '../node_modules/whirligiggle/src/scss/styles';
  @import './src/scss/my-carousel-styles';
  ```

### Slide Background Images
To add background images to each slide use the generated whirligiggle classes. Each slide is given a unique class based on its index. So the first slide will have the class `whirli-slide--1`. The second slide will have the class `whirli-slide--2` etc.
  ```scss
  // whirligiggle/src/scss/styles.scss
  $c-button-primary: #121212;

  // my-carousel-styles.scss
  $c-button-primary: hotpink;
    
  .whirli-slide--1 {
    background-image: url('src/assets/pic-of-kitten.jpg');
  }

  .whirli-slide--2 {
    background-image: url('src/assets/pic-of-potato.jpg');
  }
  ```
  ```scss
  // your base.scss
  @import '../node_modules/whirligiggle/src/scss/styles';
  @import './src/scss/my-carousel-styles';
  ```

Check out how we set up styles for the carousel demo in our [demo.scss file](https://github.com/corinneling/whirligig/blob/master/src/demo.scss)

## Supported Browsers

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>IE / Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari-ios/safari-ios_48x48.png" alt="iOS Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>iOS Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/samsung-internet/samsung-internet_48x48.png" alt="Samsung" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Samsung | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_48x48.png" alt="Opera" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Opera |
| --------- | --------- | --------- | --------- | --------- | --------- | --------- |
| IE11, Edge| last 2 versions| last 2 versions| last 2 versions| last 2 versions| last 2 versions| last 2 versions


## TO DO: 
- [ ] finish testing
- [ ] touch events on mobile
