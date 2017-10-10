// Select color input

// Select size input
const gridHeight = $("#input_height");
const gridWidth = $("#input_width");

function createBody() {
    $("<tbody></tbody>").appendTo("#pixel_canvas");
}

function removeBody() {
    $("#pixel_canva").empty();
}

function createRow() {
    for (let i = 1; i <= gridHeight.val(); i++) {
        $("<tr></tr>").appendTo("tbody");
    };
}

function createColumn() {
    for (let i = 1; i <= gridWidth.val(); i++) {
        $("<td></td>").appendTo("tr");
    };
}
// When size is submitted by the user, call makeGrid()

function makeGrid() {
    createBody();
    createRow();
    createColumn();
}

$("#sizePickerButton").click(function() {
    makeGrid();
    return false;
});