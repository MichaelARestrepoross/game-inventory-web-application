// create a variable to track the count
let count = 2;

// create a function to update the text content with the dynamic count
function updateCount(currentCount) {
    // grab the element with the "games-count" class
    const counts = document.querySelector(".games-count");
    counts.textContent = `(Games: ${currentCount})`;
}

updateCount(count);