// declare constants
const $skillBtn = $('#skillBtn');
const $input = $('#usrInput');


// variables for state tingz

let $inputText, $newLiEl;


//cached element references




// Add event listeners

$('#skillBtn').on('click', handleAddItm);

$('#skills-container').on('click', '.btn-danger', handleRmvItm);

// functions

$('li').hide();

function handleAddItm() {
    $inputText = $('#usrInput').val();
    $newLiEl = $(`<li class="list-group-item">
    <button class="btn btn-danger">X</button> ${$inputText} </li>`);
    $('ul').append($newLiEl);
    $('#usrInput').val('');
}

function handleRmvItm() {
    $(this).closest('li').fadeOut(1000, function() {
        $(this).remove();
    });
}