import { searchBooks } from "./modules/books.js";
import { removeBooks } from "./modules/dom.js";
import { clearSearch } from "./modules/dom.js";

const userInput = document.getElementById("input");
const submitBtn = document.querySelector("#submitButton");
const clearBtn = document.querySelector("#clearButton");

userInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter" && userInput.value != "") {
        event.preventDefault();

        submitBtn.click();
    }
});

submitBtn.addEventListener("click", () => {
    removeBooks();
    searchBooks(userInput.value);
    userInput.value = "";
});

clearBtn.addEventListener("click", () => {
    removeBooks();
    clearSearch();
});
