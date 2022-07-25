import { inputField, submitButton } from "./dom.module";
import searchBooks from "./books.module";

submitButton.addEventListener("click", () => {
    const userInput = inputField.value;
});
