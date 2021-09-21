// Determines comic IDs to fetch based on app state and populates then in order
const renderInOrder = async (firstComicDisplayed, comicsOnPage) => {
    const IDsToFetch = [firstComicDisplayed];
    for (let i = 0; i < comicsOnPage - 1; i++) {
        let nextID = firstComicDisplayed + i + 1;
        if (nextID > LASTPAGE) {
            nextID = (nextID % (LASTPAGE + 1)) + 1;
        }
        IDsToFetch.push(nextID);
    }

    fetchAndArrange(IDsToFetch).then(populateInOrder);
};

// Takes a list of comic IDs and initiates GET API calls on its elements
const fetchAndArrange = async (IDsToFetch) =>
    Promise.all(IDsToFetch.map((id) => fetchComic(id)));

// Returns a fulfilled promise to be further handled by an outer function
const fetchComic = async (comicID) =>
    fetch(
        `https://intro-to-js-playground.vercel.app/api/xkcd-comics/${comicID}`
    ).then((resp) => resp.json());

// Takes a list of fetched comic data and initiates adding each to the DOM
const populateInOrder = (fetchedComics) => {
    const comicStrip = document.querySelector(".comicStrip");
    comicStrip.innerHTML = "";
    for (const comic of fetchedComics) {
        populate(comic);
    }
};

// Calls prepareComic on fetched comic info and adds to comicStrip div on DOM
const populate = (comicInfo) => {
    const { title, img: imgSource } = comicInfo;

    const newComic = prepareComic(title, imgSource);
    const comicStrip = document.querySelector(".comicStrip");
    comicStrip.appendChild(newComic);
};

// Accepts title and imgSource fields in comicInfo, structures and returns a formatted DOM node for one comic
const prepareComic = (title, imgSource) => {
    // Instantiate new comicContainer
    const newComicContainer = document.createElement("div");
    newComicContainer.setAttribute("class", "comicContainer");

    const newTitleContainer = document.createElement("div");
    newTitleContainer.setAttribute("class", "comicTitleContainer");
    newComicContainer.appendChild(newTitleContainer);

    const newImageContainer = document.createElement("div");
    newImageContainer.setAttribute("class", "comicImageContainer");
    newComicContainer.appendChild(newImageContainer);

    // Instantiate new title and append to title container
    const newComicTitle = document.createElement("h3");
    newComicTitle.setAttribute("class", "comicTitle");
    newComicTitle.innerHTML = title;
    newTitleContainer.appendChild(newComicTitle);

    // Instantiate new comic img, and append to images container
    const newComicImage = document.createElement("img");
    newComicImage.setAttribute("class", "comicImage");
    newComicImage.setAttribute("src", `${imgSource}`);
    newImageContainer.appendChild(newComicImage);

    return newComicContainer;
};
