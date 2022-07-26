export const createABookCard = (result) => {
    result.forEach(async (result) => {
        const title = result.volumeInfo.title;
        const author = result.volumeInfo.authors;
        const description = result.volumeInfo.description;
        const image = result.volumeInfo.imageLinks.thumbnail;

        const titleElement = document.createElement("h2");
        const descPara = document.createElement("p");
        const authorPara = document.createElement("p");
        const imageElement = document.createElement("img");
        const div = document.createElement("div");

        titleElement.classList.add("book-card__title");
        titleElement.innerHTML = title;

        authorPara.classList.add("book-card__author-para");
        if (!author) {
            authorPara.innerHTML = "No author listed";
        } else if (author == []) {
            authorPara.innerHTML = author.join(", ");
        } else {
            authorPara.innerHTML = author;
        }

        descPara.classList.add("book-card__desc-para");
        if (description == undefined) {
            descPara.innerHTML = "No description avaliable";
        } else {
            descPara.innerHTML = description;
        }

        //Some images throw a typeError which causes whole card not to render, need a fix
        imageElement.classList.add("book-card__img");
        imageElement.src = image;

        div.classList.add("book-card");
        document
            .getElementById("bookGrid")
            .appendChild(div)
            .append(imageElement, titleElement, authorPara, descPara);
    });
};

export const removeBooks = () => {
    const parentElement = document.querySelector("#bookGrid");
    let child = parentElement.lastElementChild;
    while (child) {
        parentElement.removeChild(child);
        child = parentElement.lastElementChild;
    }
};
