// Called in executeRenderTick, prior to beginning API call (async)
const showLoading = () => {
    const comicStrip = document.querySelector(".comicStrip");
    comicStrip.innerHTML = "Loading...";
};

// Called in executeRenderTick, following API call (following successful rendering of comics)
const bindFormValues = () => {
    const comicsOnPageForm = document.querySelector("#comicsOnPage");
    comicsOnPageForm.value = comicsOnPage;

    const skipToComicControl = document.querySelector(".skipToComicControl");
    skipToComicControl.value = firstComicDisplayed;
};

// Called in main.js and event handlers, refreshes interface to reflect state

const executeRenderTick = (firstComicDisplayed, comicsOnPage) => {
    showLoading();
    renderInOrder(firstComicDisplayed, comicsOnPage); // See fetchRenderComics.js
    bindFormValues();
};

// Called in main.js (first render of page)
const addFormSubmitHandlers = () => {
    const resizeForm = document.querySelector(".pageSizeControl");
    resizeForm.addEventListener("submit", handleResizePage);

    const skipForm = document.querySelector(".skipToComicForm");
    skipForm.addEventListener("submit", handleComicSkip);
};

// // If we used modules instead...
// const domManagement = (() => {
//     // Called in executeRenderTick, prior to beginning API call (async)
// const showLoading = () => {
//     const comicStrip = document.querySelector(".comicStrip");
//     comicStrip.innerHTML = "Loading...";
// };

// // Called in executeRenderTick, following API call (following successful rendering of comics)
// const bindFormValues = () => {
//     const comicsOnPageForm = document.querySelector("#comicsOnPage");
//     comicsOnPageForm.value = comicsOnPage;

//     const skipToComicControl = document.querySelector(".skipToComicControl");
//     skipToComicControl.value = firstComicDisplayed;
// };

// // Called in main.js and event handlers, refreshes interface to reflect state
// const executeRenderTick = (firstComicDisplayed, comicsOnPage) => {
//     showLoading();
//     renderInOrder(firstComicDisplayed, comicsOnPage); // See fetchRenderComics.js
//     bindFormValues();
// };

// // Called in main.js (first render of page)
// const addFormSubmitHandlers = () => {
//     const resizeForm = document.querySelector(".pageSizeControl");
//     resizeForm.addEventListener("submit", handleResizePage);

//     const skipForm = document.querySelector(".skipToComicForm");
//     skipForm.addEventListener("submit", handleComicSkip);
// };

// return {addFormSubmitHandlers,executeRenderTick}
// })()