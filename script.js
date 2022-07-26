import { searchBooks } from "./modules/books.js";
import { removeBooks } from "./modules/dom.js";

const userInput = document.getElementById("input");
const submitBtn = document.querySelector("#submitButton");

submitBtn.addEventListener("click", () => {
    removeBooks();
    searchBooks(userInput.value);
    userInput.value = "";
});
