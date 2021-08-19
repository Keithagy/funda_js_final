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

const fetchAndArrange = async (IDsToFetch) => {
    const fetchedComics = [];
    for (const i of IDsToFetch) {
        const fetchedComicInfo = await fetchComic(i);
        fetchedComics.push(fetchedComicInfo);
    }
    return fetchedComics;
};

const fetchComic = async (comicID) => {
    const resp = await fetch(
        `https://intro-to-js-playground.vercel.app/api/xkcd-comics/${comicID}`
    );
    const comicInfo = await resp.json();
    return comicInfo;
};

const populateInOrder = (fetchedComics) => {
    const comicStrip = document.querySelector(".comicStrip");
    comicStrip.innerHTML = "";
    for (const comic of fetchedComics) {
        populate(comic);
    }
};

const populate = (comicInfo) => {
    const { title, img: imgSource } = comicInfo;

    const newComic = prepareComic(title, imgSource);
    const comicStrip = document.querySelector(".comicStrip");
    comicStrip.appendChild(newComic);
};

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
