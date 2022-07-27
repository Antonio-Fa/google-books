import { createABookCard } from "./dom.js";
import { displayLoading } from "./dom.js";
import { removeLoading } from "./dom.js";

export const searchBooks = async (search) => {
    let searchInput;
    if (search === "") {
        return;
    } else {
        if (/\s/.test(search)) {
            searchInput = search.split(" ").join("+");
        } else {
            searchInput = search;
        }
    }

    displayLoading();

    const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${searchInput}&maxResults=20`,
    );
    const bookData = await response.json();
    // This an array of objects
    const results = bookData.items;

    // We want to display the title of each book inside a para
    removeLoading();

    createABookCard(results);

    // Create a function that takes an object (in its DOM module)
    // For that object it create a div
    // in that div it adds
    // image, author, title and description
    // add that div in the right part of the original HTML
    // CAREFUL: some books dont authors or dont have images
    // Some books have more than one authors (join(", "))
    // Optional Linking
};
