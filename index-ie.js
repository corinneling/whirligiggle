import { lazyLoadImages } from './src/lazy-load';
import { addMarkupToPage } from './src/markup';
import { handleButtonNavigation, handleDotNavigation, setSlideLinkTabindex } from './src/navigation';

if (typeof NodeList !== "undefined" && NodeList.prototype && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = Array.prototype.forEach;
}

if (typeof NodeList !== "undefined" && NodeList.prototype && !NodeList.prototype.indexOf) {
  NodeList.prototype.indexOf = Array.prototype.indexOf;
}

export function init(elementId, data) {
  addMarkupToPage(elementId, data)
  if (data.showButtons) handleButtonNavigation();
  if (data.showDots) handleDotNavigation();
  setSlideLinkTabindex();
  lazyLoadImages();
} 