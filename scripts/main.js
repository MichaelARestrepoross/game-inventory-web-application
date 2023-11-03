const form = document.querySelector("form")
// console.log(form);

form.addEventListener('submit', (event) => {
    // prevent the page from reloading
    event.preventDefault();

    //destructure my target subject
    const { name, price, imageURL, rating, description} = event.target;
    // call create game function
    createGame(name.value, price.value,imageURL.value, rating.value ,description.value);

    // this will clear the inputs from the form
    form.reset();
    console.log("Name:",event.target.name.value);
    console.log("Price:$",event.target.price.value);
    console.log("ImageUrl:$",event.target.imageURL.value);
    console.log("Rating:",event.target.rating.value);
    console.log("Description:",event.target.description.value);
});