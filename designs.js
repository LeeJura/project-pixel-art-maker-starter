// Select color input

// Select size input
const gridHeight = 2;
const gridWidth = 1;

const box = $("<tbody></tbody>").appendTo("#pixel_canvas");

function createBox() {
    for (let i = 0; i < gridHeight; i++) {
        $("<tr></tr>").appendTo("tbody");
    }

    for (let i = 0; i < gridWidth; i++) {
        $("<td></td>").appendTo("tr");
    }
};

$("#sizePickerButton").click(function() {
    createBox();
    return false;
    console.log("event clicked");
});


// When size is submitted by the user, call makeGrid()

function makeGrid() {



}