// TODO: Select color input
colorInput = $("#colorPicker");

// TODO: Select size input

const gridHeight = $("#input_height");
const gridWidth = $("#input_width");

//Create table body

function createBody() {
    $("<tbody></tbody>").appendTo("#pixel_canvas");
};

//Create grid row

function createRow() {
    for (let i = 1; i <= gridHeight.val(); i++) {
        $("<tr class=row></tr>").appendTo("tbody");
    };
};

//Create grid column

function createColumn() {
    for (let i = 1; i <= gridWidth.val(); i++) {
        $("<td class=column></td>").appendTo("tr");
    };
};

// TODO: Create full grid

function makeGrid() {
    removeBody();
    createBody();
    createRow();
    createColumn();
};

// Remove table body

function removeBody() {
    $("tbody").remove();
};

// TODO: When size is submitted by the user, call makeGrid()
$("#sizePickerButton").click(function() {
    makeGrid();
    return false;
})

//TODO: Change color of a grid cell to color picker
$("#pixel_canvas").on("click", ".column", function(event) {
    $(event.currentTarget).css("background-color", colorInput.val());
})