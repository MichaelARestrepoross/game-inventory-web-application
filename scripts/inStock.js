// function to toggle the "In Stock" button
function toggleInStock(button) {
    if (button.classList.contains("in-stock")) {
      button.textContent = "Out of Stock";
      button.style.backgroundColor = "red";
      button.classList.remove("in-stock");
    } else {
      button.textContent = "In Stock";
      button.style.backgroundColor = "";
      button.classList.add("in-stock");
    }
  }
  
  // Add event listener to all buttons with the class "in-stock"
  const inStockButtons = document.querySelectorAll("button.in-stock");
  inStockButtons.forEach((button) => {
    button.addEventListener("click", function () {
      toggleInStock(this);

    });
  });