const handleNextNav = () => {
    firstComicDisplayed += comicsOnPage;
    if (firstComicDisplayed > LASTPAGE) {
        firstComicDisplayed = (firstComicDisplayed % (LASTPAGE + 1)) + 1;
    }
    executeRenderTick(firstComicDisplayed, comicsOnPage);
};
const handlePrevNav = () => {
    firstComicDisplayed -= comicsOnPage;
    if (firstComicDisplayed < FIRSTPAGE) {
        firstComicDisplayed = LASTPAGE + firstComicDisplayed;
    }
    executeRenderTick(firstComicDisplayed, comicsOnPage);
};

const handleRandNav = () => {
    firstComicDisplayed = Math.floor(Math.random() * (LASTPAGE - 1));
    executeRenderTick(firstComicDisplayed, comicsOnPage);
};

const handleResizePage = (e) => {
    e.preventDefault();
    const comicsOnPageForm = document.querySelector("#comicsOnPage");

    if (
        +comicsOnPageForm.value != 1 &&
        +comicsOnPageForm.value != 3 &&
        +comicsOnPageForm.value != 5
    ) {
        alert(
            `Invalid page size. Please use one of the dropdown options. Page will re-render with current options (${comicsOnPage} comics starting from no. ${firstComicDisplayed})`
        );
    } else {
        comicsOnPage = +comicsOnPageForm.value;
    }

    executeRenderTick(firstComicDisplayed, comicsOnPage);
};

const handleComicSkip = (e) => {
    e.preventDefault();
    const skipToComicControl = document.querySelector(".skipToComicControl");
    if (
        +skipToComicControl.value <= 0 ||
        +skipToComicControl.value > LASTPAGE ||
        !Number.isInteger(+skipToComicControl.value)
    ) {
        alert(
            `Invalid comic ID. Please input a positive integer between ${FIRSTPAGE} and ${LASTPAGE}. Page will re-render with current options (${comicsOnPage} comics starting from no. ${firstComicDisplayed})`
        );
    } else {
        firstComicDisplayed = +skipToComicControl.value;
    }

    executeRenderTick(firstComicDisplayed, comicsOnPage);
};
