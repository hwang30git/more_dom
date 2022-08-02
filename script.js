// get our three buttons
let changeButton = document.getElementById("change_button");
let addButton = document.getElementById("add_button");
let deleteButton = document.getElementById("delete_button");

let imageDiv = document.getElementById("image_div");

// CHANGE BUTTON - change the first image to Squirtle
changeButton.onclick = function () {
    // gets the first image in the imageDiv
    // by selecting 1st child
    let firstImage = imageDiv.children[0];

    //set the first image's source
    firstImage.src = "images/squirtle.png"
}

let images = ["images/bulbasaur.png", "images/charmander.png", "images/squirtle.png"];

let counter = 0;

// ADD BUTTON - add a different Pokemon each time it's clicked
addButton.onclick = function () {
    // Create a new element
    // Creates <img></img>
    let newImage = document.createElement("img");
    newImage.src = images[counter];
    imageDiv.appendChild(newImage);
    
    // increase counter to move on to the next image
    counter++;

    // prevents counter from going above number of images
    if (counter >= images.length) {
        counter = 0;
    }
}

// REMOVE BUTTON - delete the *first* image from our div
deleteButton.onclick = function () {
    // removes the first element in the div
    imageDiv.children[0].remove();
}