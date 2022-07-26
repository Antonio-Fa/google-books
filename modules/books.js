import { createABookCard } from "./dom.js";

export const searchBooks = async (search) => {
    let searchInput;
    if (/\s/.test(search)) {
        searchInput = search.split(" ").join("+");
    } else {
        searchInput = search;
    }
    const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${searchInput}&maxResults=20`,
    );
    const bookData = await response.json();
    // This an array of objects
    const results = bookData.items;

    // We want to display the title of each book inside a para
    console.log(results);
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
