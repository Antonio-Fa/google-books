async function searchBooks(search) {
    try {
        const response = await fetch(
            `https://www.googleapis.com/books/v1/volumes?q=${search}`,
        );
        const bookData = await response.json();
        const results = bookData.items;
        const bookDetails = results.map((book) => {
            return book.volumeInfo;
        });
        const bookTitles = bookDetails.map((title) => {
            return title.title;
        });
        //remove when done vvv
        console.log(bookDetails);
        console.log(bookTitles);
        // const testTitle = document.getElementById("bookTitle");
        // testTitle.innerText = bookTitles[0];
        const bookGridElement = document.getElementById("bookGrid");
        const divElement = document.createElement("div");
        const paraElement = document.createElement("p");
        const headerElement = document.createElement("h2");
        bookGridElement.appendChild(divElement);
        divElement.appendChild(headerElement, paraElement);
        headerElement.innerText = bookTitles[0];

        return results;
    } catch (e) {
        console.log(e.message);
    }
}

const output = async () => await searchBooks("witcher");

console.log(output());

// async function addCard(result) {
//     try {
//         const bookGridElement = document.getElementById("bookGrid");
//         const divElement = document.createElement("div");
//         const paraElement = document.createElement("p");
//         const headerElement = document.createElement("h2");
//         bookGridElement.appendChild(divElement);
//         divElement.appendChild(headerElement, paraElement);
//         headerElement.innerText = result;
//     } catch (e) {
//         console.log(e.message);
//     }
// }

// addCard(searchBooks("witcher"));
