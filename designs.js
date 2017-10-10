// Select color input

// Select size input

const gridHeight = $("#input_height");
const gridWidth = $("#input_width");

//Create table body

function createBody() {
    $("<tbody></tbody>").appendTo("#pixel_canvas");
}

//Create grid row

function createRow() {
    for (let i = 1; i <= gridHeight.val(); i++) {
        $("<tr></tr>").appendTo("tbody");
    };
}

//Create grid column

function createColumn() {
    for (let i = 1; i <= gridWidth.val(); i++) {
        $("<td></td>").appendTo("tr");
    };
}

// When size is submitted by the user, call makeGrid()

function makeGrid() {
    removeBody();
    createBody();
    createRow();
    createColumn();
}

$("#sizePickerButton").click(function() {
    makeGrid();
    return false;
});

// Remove table body

function removeBody() {
    $("tbody").remove();
}