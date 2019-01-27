// Used to check the opponent turn
var numer = 0;
// Default Pictures
var imagesLeftX = $("#img-left").attr("src");
var imagesLeftO = $("#img-right").attr("src");
var defaultImage = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU2hv3c33Kg0OhhpS8psJmQ8QIpL3CEaFj9uc8OejHRyhzQ3D5";
var profImgs = $("#img-left, #img-right");

// Used to set clicking events for setting user turn
turno();
turnx();

// Tic Tac Toe Play Event
$(".All-TD").click(function() {

    // Switch border based on oponent
    bordibluiRadhes();

    // Turn off events that switch Opponents Turn
    $("#xxxx,#oooo").off("click");

    // Set Turn to x By default
    $(".spn-turn").text("Turn");
    $(".radha").text("o");
    $(".radha").css("display", "block");

    // Check if the click is invalid
    if ($(this).text() !== "") {
        return;
    }

    // Based on Global var we can check the opponent turn
    if (numer === 0) {
        $(this).text("x");
        $(this).css("color", "#555555");
        $(".radha").text("o");
        numer = 1;
    } else if (numer === 1) {
        $(this).text("o");
        $(this).css("color", "white");
        $(".radha").text("x");
        numer = 0;
    }

    // Check if We have a winner
    if (kontrollo()) {

        var element = $(".div-table");
        var div = $('<div style="display: none" class="div-winner"><p class="winner-p"></p><p class="style-p">WINNER</p></div>')
        div.appendTo(element);
        div.css("background-image", "url(https://images.freeimages.com/images/premium/previews/3558/35588640-firecracker-with-fireworks-popping-on-white-background.jpg)");
        div.show();
        div.animate({
            opacity: '0.1',
        }, "slow");
        div.animate({
            opacity: '1',
        }, "slow");
        $(".All-TD").text("");
        $("#tab").css("visibility", "hidden");
        $(".inp-pht-x").css("display", "none");
        $(".inp-pht-o").css("display", "none");
        $(".span-divLeft , .span-divRight").css("box-shadow", "");

        if (numer === 0) {
            div.find('.winner-p').text('O');
            var photo = $(".inp-pht-o").clone();
            photo.find("#file-photo-o").remove();
            photo.css("display", "flex");
            photo.css("marginLeft", "auto");
            photo.css("right", "0");
            photo.css("justifyContent", "center");
            photo.css("width", "100%");
            photo.css("position", "absolute");
            div.append(photo);
            var imgright = $(photo).find("#img-right");
            imgright.css("zIndex", "999");
            imgright.css("top", "-42px");
            imgright.css("position", "absolute");
            $(".winner-p").css("display", "none");
            $(".style-p").css("display", "none");
            imgright.css("margin", "auto");
            $(".radha").css("display", "none");
            $(".spn-turn").text("Won player O");
            imgright.animate({
                top: '-40px',
                width: '120px',
                height: '120px',
                left: '0',
                right: '0',
            }, 1000, function() {
                imgright.animate({
                    width: '85px',
                    height: '85px',
                }, 1000, function() {
                    imgright.animate({
                        top: '-40px',
                    }, 500, function() {
                        $(".style-p").css("display", "block");
                        $(".winner-p").css("display", "block");
                    })
                });
            });
            imgright.hover(function() {
                if (imgright.attr("src") !== defaultImage) {
                    $(this).css("width", "190px");
                    $(this).css("height", "190px");
                    $(this).css("top", "-90px");
                    $(this).mouseleave(function() {
                        $(this).css("width", "");
                        $(this).css("height", "");
                        $(this).css("top", "-40px");
                    });
                }
            });
            changePiketo();
        } else {
            div.find('.winner-p').text('X');
            var photo = $(".inp-pht-x").clone();
            photo.find("#file-photo-x").remove();
            photo.css("display", "flex");
            photo.css("margin", "auto");
            photo.css("flexFlow", "column");
            photo.css("width", "100%");
            photo.css("position", "absolute");
            $(".labe-inpt").css("width", "100%");
            div.append(photo);
            var imgleft = $(photo).find("#img-left");
            imgleft.css("zIndex", "999");
            imgleft.css("top", "-42px");
            imgleft.css("position", "absolute");
            $(".winner-p").css("display", "none");
            $(".style-p").css("display", "none");
            imgleft.css("margin", "auto");
            $(".radha").css("display", "none");
            $(".spn-turn").text("Won player X");
            imgleft.animate({
                top: '-40px',
                width: '120px',
                height: '120px',
                left: '0',
                right: '0',
            }, 1000, function() {
                imgleft.animate({
                    width: '85px',
                    height: '85px',
                }, 1000, function() {
                    imgleft.animate({
                        top: '-40px',
                    }, 500, function() {
                        $(".style-p").css("display", "block");
                        $(".winner-p").css("display", "block");
                    });
                });
            });
            imgleft.hover(function() {
                if (imgleft.attr("src") !== defaultImage) {
                    $(this).css("width", "190px");
                    $(this).css("height", "190px");
                    $(this).css("top", "-90px");
                    $(this).mouseleave(function() {
                        $(this).css("width", "");
                        $(this).css("height", "");
                        $(this).css("top", "-40px");
                    });
                }
            });
            changePiketx();
        }
        loadFireWork(div);
        numer = 0;
        return;
    }

   // Check if draw
   var td = $("#tab tr td");
    var j = 0;
    for (var i of td) {
        if (i.innerHTML !== "") {
            j++;
        }
    }
    if (j === 9) {
        $(".radha").css("display", "none");
        $(".spn-turn").text("Game Over");
        $(".span-divLeft , .span-divRight").css("box-shadow", "");
        alert('DRAW');
    }
});

// Add event litener to restart
$(".span-restart").click(function() {
    // New Game
    // No deleted Points
    $(".span-divLeft , .span-divRight").css("box-shadow", "");
    $(".spn-turn").text("select player");
    $(".radha").css("display", "none");
    turnx();
    turno();
    $("#tab").css("visibility", "visible");
    $(".div-winner").remove();
    $("#tab").css("display", "table");
    $(".inp-pht-x").css("display", "flex");
    $(".inp-pht-o").css("display", "flex");
    numer = 0;
    $(".All-TD").text("");
});
$(".span-reset").click(function() {
    // New Game
    // Delete Points
    $(".span-divLeft , .span-divRight").css("box-shadow", "");
    $(".spn-turn").text("select player");
    $(".radha").css("display", "none");
    turnx();
    turno();
    $("#tab").css("visibility", "visible");
    $(".inp-pht-x").css("display", "flex");
    $(".inp-pht-o").css("display", "flex");
    $(".div-winner").remove();
    $("#tab").css("display", "table");
    $(".All-TD").text("");
    $("#piket-x , #piket-o").text('-');
    $("#img-left").attr("src", imagesLeftX);
    $("#img-right").attr("src", imagesLeftO);
    numer = 0;
});

// Increase X Player Credits
function changePiketx() {
    var pikx = $("#piket-x");
    var nmr = parseInt(pikx.text() === "-" ? 0 : pikx.text());
    nmr++;

    pikx.text(nmr);
}

// Increase O Player Credits
function changePiketo() {
    var piko = $("#piket-o");
    var nmr = parseInt(piko.text() === "-" ? 0 : piko.text());
    nmr++;

    piko.text(nmr);
}

// Add event listener to TurnX (To change the turn)
function turnx() {
    $("#xxxx").click(function() {
        $(".radha").text("x");
        $(".radha").css("display", 'block');
        $(".spn-turn").text("Turn");
        $(".span-divLeft").css("box-shadow", "-1px 3px 2px 0px #14bdac");
        $(".span-divRight").css("box-shadow", "");
    });
}
// Add event listener to Turno (To change the turn)
function turno() {
    $("#oooo").click(function() {

        $(".radha").text("o");
        $(".radha").css("display", 'block');
        $(".spn-turn").text("Turn");
        $(".span-divRight").css("box-shadow", "-1px 3px 2px 0px #14bdac");
        $(".span-divLeft").css("box-shadow", "");
        numer = 1;
    });
}


// Make with blue border Next Oponent
function bordibluiRadhes() {
    if ($(".radha").text() === "o") {
        $(".span-divRight").css("box-shadow", "");
        $(".span-divLeft").css("box-shadow", "-1px 3px 2px 0px #14bdac");
    } else if ($(".radha").text() === "x") {
        $(".span-divLeft").css("box-shadow", "");
        $(".span-divRight").css("box-shadow", "1px 3px 2px 0px #14bdac");
    }
}


// Funtion to check if we have 3 pairs match
function kontrollo() {
    var trs = $('#tab tr');
    for (i of trs) {
        if (kontrolloArr(i.children)) {
            return true;
        }
    }
    if (kontrolloArr($('#tab tr :nth-child(1)'))) {
        return true;
    }
    if (kontrolloArr($('#tab tr :nth-child(2)'))) {
        return true;
    }
    if (kontrolloArr($('#tab tr :nth-child(3)'))) {
        return true;
    }
    if (trs[0].children[0].innerHTML !== "" & trs[0].children[0].innerHTML === trs[1].children[1].innerHTML & trs[0].children[0].innerHTML === trs[2].children[2].innerHTML) {
        return true;
    }
    if (trs[0].children[2].innerHTML !== "" & trs[0].children[2].innerHTML === trs[1].children[1].innerHTML & trs[0].children[2].innerHTML === trs[2].children[0].innerHTML) {
        return true;
    }
}


// Check if an array has all values the same
function kontrolloArr(arr) {
    for (i = 0; i < arr.length - 1; i++) {
        if (arr[i].innerText === "" || arr[i].innerText !== arr[i + 1].innerText) {
            return false
        }
    }
    return true
}


// Change Left Profile Image
function renderImageLeft(file) {
    if (typeof file === 'undefined') {
        alert("No File Chosen");
        return;
    }
    var reader = new FileReader();

    reader.readAsDataURL(file);
    reader.onload = function(event) {
        the_url = event.target.result;
        var image = $("#img-left");
        image.attr("src", the_url);
        image.mouseleave();
    }
}


// Change right Profile Image
function renderImageRight(file) {
    if (typeof file === 'undefined') {
        alert("No File Chosen");
        return;
    }
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function(event) {
        the_url = event.target.result;
        var image = $("#img-right");
        image.attr("src", the_url);
        image.mouseleave();
    }
}

// Zoom Image on hover

profImgs.mouseleave();
profImgs.hover(function() {
    var self = $(this);
    var src = $(self).attr("src");
    if (src !== defaultImage) {
        self.css("width", "190px");
        self.css("height", "190px");
        self.mouseleave(function() {
            self.css("width", "85px");
            self.css("height", "85px");
        });

    }
});