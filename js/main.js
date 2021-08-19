const LASTPAGE = 2475;
const FIRSTPAGE = 1;

let firstComicDisplayed = 1;
let comicsOnPage = 3;

addFormSubmitHandlers();
executeRenderTick(firstComicDisplayed, comicsOnPage);