import { lazyLoadImages } from './src/lazy-load';
import { addMarkupToPage } from './src/markup';
import { handleButtonNavigation, handleDotNavigation, setSlideLinkTabindex } from './src/navigation';

export function init(elementId, data) {
  addMarkupToPage(elementId, data)
  if (data.showButtons) handleButtonNavigation();
  if (data.showDots) handleDotNavigation();
  setSlideLinkTabindex();
  lazyLoadImages();
  console.log('1')
}