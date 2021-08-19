// App state
const LASTPAGE = 2475;
const FIRSTPAGE = 1;

let firstComicDisplayed = 1;
let comicsOnPage = 3;

// First Render (see domManagement.js)
addFormSubmitHandlers();
executeRenderTick(firstComicDisplayed, comicsOnPage); 