import { lazyLoadImages } from './src/index';
import { addMarkupToPage } from './src/markup';
import { handleButtonNavigation, handleDotNavigation } from './src/navigation';

export function init(elementId, data) {
    addMarkupToPage(elementId, data)
    if (data.showButtons) handleButtonNavigation();
    if (data.showDots) handleDotNavigation();
    lazyLoadImages();
}