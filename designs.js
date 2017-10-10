// Select color input

// Select size input
const box = $("<tr><td></td></tr>");

function createBox() {
    $(box).appendTo("#pixel_canvas");
};

$("#sizePickerButton").click(function() {
    createBox();
    return false;
    console.log("event clicked");
});


// When size is submitted by the user, call makeGrid()

function makeGrid() {



}