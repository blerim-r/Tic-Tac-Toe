//numrin e deklarojm gjithmon 0 ce te orientohemi per radhen e x ose o
var numer = 0;


// fotot defoult te profileve left-right
var imagesLeftX = $("#img-left").attr("src");
var imagesLeftO = $("#img-right").attr("src");


// e bejm radhen none pasi akm nuk e kemi zgjedhur cili nga lojtaret x ose o do te luaj i pari
//pasi te zgjidhet radha do ta shfeqim
$(".radha").css("display","none");


//keto jan funksionet ce thirren ne fillim te lojes ce vendosin radhen ndermje x dhe o
// ate e ka ne dore perdoruesi
turno();
turnx();

// cfare ndodh pas cdo klikili ne "td"
$(".All-TD").click(function () {

    // eshte funksion ce shfaq borderin blu elementit ce ka radhen
    bordibluiRadhes();


    $(".span-restart").click(function () {
        // cfare ndodh pas cdo klikimi ne Restart
        // fillon nje loj te re por pa fshire piket kush ka fituar

        $(".span-divLeft , .span-divRight").css("box-shadow","");
        $(".spn-turn").text("select player");
        $(".radha").css("display","none");
        turnx();
        turno();
        $("#tab").css("visibility","visible");
        $(".div-winner").remove();
        $("#tab").css("display" , "table");
        $(".inp-pht-x").css("display","flex");
        $(".inp-pht-o").css("display","flex");
        numer = 0;
        $(".All-TD").text("");
    });
    $(".span-reset").click(function () {
        // cfare ndodh pas cdo klikimi ne RESET
        // fillon edhe nje here cdo gje nga e para
        debugger
        $(".span-divLeft , .span-divRight").css("box-shadow","");
        $(".spn-turn").text("select player");
        $(".radha").css("display","none");
        turnx();
        turno();
        $("#tab").css("visibility","visible");
        $(".inp-pht-x").css("display","flex");
        $(".inp-pht-o").css("display","flex");
        $(".div-winner").remove();
        $("#tab").css("display" , "table");
        $(".All-TD").text("");
        $("#piket-x , #piket-o").text('-');
        $("#img-left").attr("src" , imagesLeftX);
        $("#img-right").attr("src" , imagesLeftO);
        numer = 0;
    });


    // ktu pasi kemi zgjedhur cili ka radhen i bejm t dy butonat te pa klikueshem deri sa t mbaroj loja
    $("#xxxx,#oooo").off("click");

    // nese nuk e kemi zgjedhur radhen akoma ne ja lem x si fillim

    $(".spn-turn").text("Turn");
    $(".radha").text("o");
    $(".radha").css("display","block");



    // kontrollojme ncs po klikojm ne kuti boshe pa text x ose o ;
    if ($(this).text()!=="") {
        alert("error");
        return;
    }

    // kemi deklaruar nje variabel ne fillim "numri = 0"
    // dhe me ndihmen e variablit ne mund te kontrollojm radhen e x dhe te o
    if (numer === 0) {
        $(this).text("x");
        $(this).css("color","#555555");
        $(".radha").text("o");
        numer = 1 ;
    }else if (numer === 1) {
        $(this).text("o");
        $(this).css("color","white");
        $(".radha").text("x");
        numer = 0 ;
    }

    // funksioni kontrollo eshte nje funksion ce kthen "true" ose "false" dhe nese eshte "true" futet brenda dhe krijohet
    // nje div winer ncs esht "false" nuk futet fare
    if (kontrollo()) {
        var element = $(".div-table");
        var div = $('<div style="display: none" class="div-winner"><p class="winner-p"></p><p class="style-p">WINNER</p></div>')
        div.appendTo(element);
        div.css("background-image","url(https://images.freeimages.com/images/premium/previews/3558/35588640-firecracker-with-fireworks-popping-on-white-background.jpg)")
        div.show();
        div.animate({
            opacity: '0.1',
        }, "slow");
        div.animate({
            opacity: '1',
        },"slow");
        $(".All-TD").text("");
        $("#tab").css("visibility","hidden");
        $(".inp-pht-x").css("display","none");
        $(".inp-pht-o").css("display","none");
        $(".span-divLeft , .span-divRight").css("box-shadow","");


        if  (numer === 0) {
            div.find('.winner-p').text('O');
            var photo = $(".inp-pht-o").clone();
            photo.find("#file-photo-o").remove();
            photo.css("display","flex");
            photo.css("marginLeft","auto");
            photo.css("right","0");
            photo.css("justifyContent","center");
            photo.css("width","100%");
            photo.css("position","absolute");
            div.append(photo);
            var imgright = $(photo).find("#img-right");
            imgright.css("zIndex","999");
            imgright.css("top","-42px");
            imgright.css("position","absolute");
            $(".winner-p").css("display","none");
            $(".style-p").css("display","none");
            imgright.css("margin","auto");
            $(".radha").css("display","none");
            $(".spn-turn").text("Won player O");
            imgright.animate({
                top: '-40px',
                width: '120px',
                height: '120px',
                left: '0',
                right: '0',
            },1000, function () {
                imgright.animate({
                    width: '85px',
                    height: '85px',
                },1000, function () {
                   imgright.animate({
                       top: '-40px',
                   },500,function () {
                       $(".style-p").css("display","block");
                       $(".winner-p").css("display","block");
                   })
                });
            });
            imgright.hover(function () {
                if (imgright.attr("src") !== "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU2hv3c33Kg0OhhpS8psJmQ8QIpL3CEaFj9uc8OejHRyhzQ3D5"){
                    $(this).css("width","190px");
                    $(this).css("height","190px");
                    $(this).css("top","-90px");
                    $(this).mouseleave(function () {
                        $(this).css("width","");
                        $(this).css("height","");
                        $(this).css("top","-40px");
                    });
                }
            });




            // imgWinerHover();
            changePiketo();
        }else {
            div.find('.winner-p').text('X');
            var photo = $(".inp-pht-x").clone();
            photo.find("#file-photo-x").remove();
            photo.css("display","flex");
            photo.css("margin","auto");
            photo.css("flexFlow","column");
            photo.css("width","100%");
            photo.css("position","absolute");
            $(".labe-inpt").css("width","100%");
            div.append(photo);
            var imgleft = $(photo).find("#img-left");
            imgleft.css("zIndex","999");
            imgleft.css("top","-42px");
            imgleft.css("position","absolute");
            $(".winner-p").css("display","none");
            $(".style-p").css("display","none");
            imgleft.css("margin","auto");
            $(".radha").css("display","none");
            $(".spn-turn").text("Won player X");
            imgleft.animate({
                top: '-40px',
                width: '120px',
                height: '120px',
                left: '0',
                right: '0',
            },1000,function () {
                imgleft.animate({
                    width: '85px',
                    height: '85px',
                },1000 ,function () {
                    imgleft.animate({
                        top: '-40px',
                    },500,function () {
                        $(".style-p").css("display","block");
                        $(".winner-p").css("display","block");
                    });
                });
            });
            imgleft.hover(function () {
                if (imgleft.attr("src") !== "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU2hv3c33Kg0OhhpS8psJmQ8QIpL3CEaFj9uc8OejHRyhzQ3D5"){
                    $(this).css("width","190px");
                    $(this).css("height","190px");
                    $(this).css("top","-90px");
                    $(this).mouseleave(function () {
                        $(this).css("width","");
                        $(this).css("height","");
                        $(this).css("top","-40px");
                    });
                }
            });




                 // imgWinerHover();
                 changePiketx();
    }
        loadFireWork(div);
        numer = 0;
        return;
    }

    // kontrollojm rastin kur jan te plotesuara te gjitha kutiat dhe loja del barazim (dhe shfaqim alert "draw")

    var td = $("#tab tr td");
    var j = 0;
    for (i of td) {
        if (i.innerHTML !== "") {
            j++;
        }
    }
    if (j === 9) {
        $(".radha").css("display","none");
        $(".spn-turn").text("Game Over");
        $(".span-divLeft , .span-divRight").css("box-shadow","");
        alert('DRAW');
    }
});



//ky funksion ndrryshon piket e x dmth i rrit ato pas cdo loje ncs ka fituar lojtari x
function changePiketx() {
    var pikx = $("#piket-x");
    // e pyesim ncs  pikx.text() eshte i barabate me ket shenjen "-" kthe zero perndryshe kthe nr ce eshte
    var nmr = parseInt(pikx.text() === "-" ? 0 : pikx.text());
    nmr ++ ;

    pikx.text(nmr);
}

//ky funksion ndrryshon piket e o dmth i rrit ato pas cdo loje ncs ka fituar lojtari o
function changePiketo() {
    var piko = $("#piket-o");
    // e pyesim ncs  piko.text() eshte i barabate me ket shenjen "-" kthe zero perndryshe kthe nr ce eshte
    var nmr = parseInt(piko.text() === "-" ? 0 : piko.text());
    nmr ++ ;

    piko.text(nmr);
}

//keto jan funksionet ce thirren ne fillim te lojes ce vendosin radhen ndermje x dhe o
function turnx(){
    $("#xxxx").click(function () {
        $(".radha").text("x");
        $(".radha").css("display",'block');
        $(".spn-turn").text("Turn");
        $(".span-divLeft").css("box-shadow","-1px 3px 2px 0px #14bdac");
        $(".span-divRight").css("box-shadow","");
    });
}
function turno(){
    $("#oooo").click(function () {

        $(".radha").text("o");
        $(".radha").css("display",'block');
        $(".spn-turn").text("Turn");
        $(".span-divRight").css("box-shadow","-1px 3px 2px 0px #14bdac");
        $(".span-divLeft").css("box-shadow","");
        numer = 1 ;
    });
}


// eshte funksion ce shfaq borderin blu elementit ce ka radhen
function bordibluiRadhes() {
    if ($(".radha").text() === "o") {
        $(".span-divRight").css("box-shadow","");
        $(".span-divLeft").css("box-shadow","-1px 3px 2px 0px #14bdac");
    }else if ($(".radha").text() === "x") {
        $(".span-divLeft").css("box-shadow","");
        $(".span-divRight").css("box-shadow","1px 3px 2px 0px #14bdac");
    }
}


// funksioni kontrollo ekzekutohet pas cdo clikimi ne "table td" dhe kontrollon te gjitha rastet e mundshme ku 3 element td
// jan te njejte njeri pas tjetrit si vertikal ,horizontal ashtu eshe diagonal
// ncs esht i vertet njeri nga kto raste funksioni kthen tru dhe ekzekutohet me siper aty ku thirret
function kontrollo() {
    var trs = $('#tab tr');
    for (i of trs ) {
       if (kontrolloArr(i.children)){
           return true ;
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


// ky funksion kontrollon ncs nje array me td i ka te gjitha vlerat e barabarta
function kontrolloArr(arr) {
    for (i = 0 ; i < arr.length - 1; i++){
        if(arr[i].innerText === "" || arr[i].innerText  !== arr[i+1].innerText ) {
            return false
        }
    }
    return true
}


// ky funksion nderron foton e profilit majtas
function renderImageLeft(file) {
    if (typeof file === 'undefined') {
        alert("ju nuk zgjodhet asnje file");
        return;
    }
    var reader = new FileReader();

    reader.readAsDataURL(file);
    reader.onload = function (event) {
        the_url = event.target.result;

        // var image = document.getElementById('profImage');
        // image.src =  the_url;

        var image = $("#img-left");
        image.attr("src",the_url);
        image.mouseleave();
    }
}


// ky funksion nderron foton e profilit djathtas
function renderImageRight(file) {
    if (typeof file === 'undefined') {
        alert("ju nuk zgjodhet asnje file");
        return;
    }
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function (event) {
        the_url = event.target.result;
        var image = $("#img-right");
        image.attr("src",the_url);
        image.mouseleave();
    }
}





// momenti kur jemi n hover te fotos majte  zmadhojm pak me shum foton duke perdorur css
var imgLeft = $("#img-left");
imgLeft.mouseleave();
imgLeft.hover(function () {
    var src = $("#img-left").attr("src");
    if (src !== "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU2hv3c33Kg0OhhpS8psJmQ8QIpL3CEaFj9uc8OejHRyhzQ3D5") {
        imgLeft.css("width", "190px");
        imgLeft.css("height", "190px");
        imgLeft.mouseleave(function () {
            $(imgLeft).css("width", "85px");
            $(imgLeft).css("height", "85px");
        });

    }
});


// momenti kur jemi n hover te fotos djathte zmadhojm pak me shum foton duke perdorur css
var imgRight = $("#img-right");
imgRight.mouseleave();
imgRight.hover(function () {
    var src = $("#img-right").attr("src");
    if (src !== "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU2hv3c33Kg0OhhpS8psJmQ8QIpL3CEaFj9uc8OejHRyhzQ3D5"){
       imgRight.css("width","190px");
       imgRight.css("height","190px");
        imgRight.mouseleave(function () {
            $(imgRight).css("width","85px");
            $(imgRight).css("height","85px");
        });

    }
});



function imgWinerHover (){
    debugger;
    $("#img-left,#img-right").hover(function () {
        if ($(this).attr("src") !== "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU2hv3c33Kg0OhhpS8psJmQ8QIpL3CEaFj9uc8OejHRyhzQ3D5"){
            $(this).css("width","190px");
            $(this).css("height","190px");
            $(this).css("top","-90px");
            $(this).mouseleave(function () {
                $(this).css("width","");
                $(this).css("height","");
                $(this).css("top","-40px");
                $(this).mouseleave();
            });
        }
    });
}