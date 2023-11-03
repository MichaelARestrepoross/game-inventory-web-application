
// generateGame
function createGame(name, price, imageURL, rating, description) {

  //instead of creating an li. im going to call the contactTmeplate function
  const li = gameTemplate(name, price, imageURL, rating, description)

    //Grab the ul list from the DOM
    const ul = document.querySelector("ul");
    // append the newly created li
    ul.append(li);
}

function gameTemplate(name, price, imageURL, rating, description) {
    const li = document.createElement("li");
    li.classList.add("single-game");


      // Create a button to toggle "In Stock" status
    const inStockButton = document.createElement("button");
    inStockButton.textContent = 'In Stock';
    inStockButton.classList.add("in-stock"); // Add the "in-stock" class
    inStockButton.addEventListener('click', function () {
      toggleInStock(this); // Call the toggleInStock function to toggle the button state
    });

    // create a remove game button
    const removeButton =document.createElement("button");
    // add text to the button 'Remove contact'
    removeButton.textContent = 'Remove Game'
    // add an event listener to the button to remove the li
    removeButton.addEventListener('click', (event)=>{
      // find the closest li to this button and remove it
      event.target.closest(".single-game").remove();
    });

    
    const img = document.createElement("img");
    img.alt = "Game Image";
    
    img.onerror = function() {
        // Image failed to load, display "No Game Image" message
        const noImageMessage = li.querySelector('.no-image-message');
        noImageMessage.style.display = 'block';
        img.style.display = 'none'; // Hide the image
    };

    if (imageURL) {
        img.src = imageURL;
    } else {
        // If no image URL is provided, set the default image
        img.src = 'path-to-default-image.jpg';
    }

    li.innerHTML = `
        <div class="image-container" style="position: relative; text-align: center;">
            ${img.outerHTML}
            <div class="no-image-message" style="display: none; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);">No Game Image</div>

        </div>
        <p><strong>Name</strong>: ${name}</p>
        <p><strong>Price</strong>: $${price}</p>
        <p><strong>Rating</strong>: ${rating}</p>
        <p><strong>Description</strong>:</p>
        <div class="description-box">
            <p>${description}</p>
        </div>
    `;

    if (!imageURL || imageURL === 'path-to-default-image.jpg') {
        const noImageMessage = li.querySelector('.no-image-message');
        noImageMessage.style.display = 'block';
        img.style.display = 'none'; // Hide the image
    }

    li.append(inStockButton);
    li.append(removeButton);

    return li;
}


createGame("Game 1", 29.99, "image-urll.jpg", "4.5", "A great game for all ages.");
createGame("Game 2", 19.99,"",   "3.8", "An exciting adventure awaits!");
// grab all of the li elements in the html 
const listItems = document.querySelectorAll("button.delete-button");
// loop through the elements 
// add event listener to each element 
for (item of listItems){
  item.addEventListener('click', (event)=>{
    // to remove the element 
    event.target.closest(".single-game").remove();
  })
}