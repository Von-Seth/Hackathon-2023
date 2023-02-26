var characters = ["knight", "hunter"];

for (let i = 0; i < characters.length; i++) {
    let hero = characters[i];
    $("."+hero).css({
        'background-image': 'url("images/'+hero+'.png")',
        'background-size': 'cover',
        'background-repeat': 'no-repeat'
    });
}

var selected_character;
// choose character
$("img").click(function(e) {
    console.log(e.target.id);
    selected_character = e.target.id;
    $('#popup_board_container').fadeIn();
    // window.location.href = "board.html";
});

