const showLoading = () => {
    const comicStrip = document.querySelector(".comicStrip");
    comicStrip.innerHTML = "Loading...";
};

const bindFormValues = () => {
    const comicsOnPageForm = document.querySelector("#comicsOnPage");
    comicsOnPageForm.value = comicsOnPage;

    const skipToComicControl = document.querySelector(".skipToComicControl");
    skipToComicControl.value = firstComicDisplayed;
};

const executeRenderTick = (firstComicDisplayed, comicsOnPage) => {
    showLoading();
    renderInOrder(firstComicDisplayed, comicsOnPage);
    bindFormValues();
};

const addFormSubmitHandlers = () => {
    const resizeForm = document.querySelector(".pageSizeControl");
    resizeForm.addEventListener("submit", handleResizePage);

    const skipForm = document.querySelector(".skipToComicForm");
    skipForm.addEventListener("submit", handleComicSkip);
};