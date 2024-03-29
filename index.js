import { lazyLoadImages } from './src/lazy-load';
import { addMarkupToPage } from './src/markup';
import { handleButtonNavigation, handleDotNavigation, setSlideLinkTabindex } from './src/navigation';
import './src/scss/styles.scss';

if (typeof NodeList !== "undefined" && NodeList.prototype && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = Array.prototype.forEach;
}

if (typeof NodeList !== "undefined" && NodeList.prototype && !NodeList.prototype.indexOf) {
  NodeList.prototype.indexOf = Array.prototype.indexOf;
}

export function init(elementId, data) {
  addMarkupToPage(elementId, data)
  const slides = document.querySelectorAll('.whirli-slide');
  if (data.showButtons) handleButtonNavigation(slides);
  if (data.showDots) handleDotNavigation(slides);
  setSlideLinkTabindex(slides);
  lazyLoadImages();
}