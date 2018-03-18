// menu part

$(document).ready(function(){

    $(".open").click(function () {

        $(".menu").slideToggle();

    });
});


// slider part

var index = 1;

function plusIndex(n, count, className) {
    index = index +1;
    showImage(index, count, className);
}

showImage(1, 1, "slideImg");

function showImage(n, count, className){
    var i;
    var x = document.getElementsByClassName(className);

    if(n > x.length) {
        index = 1
    }

    if(n < 1) {
        index = x.length
    }

    for(i = 0; i < x.length; i++){
        x[i].style.display = "none";
    }

    var maxIndex = index + count;

    if(maxIndex > x.length - 1) {
        index = maxIndex - x.length;
    }

    for(var i = index; i < maxIndex; i++) {
        if(x[i -1]) {
            x[i - 1].style.display = "block";
        }
    }
}

































































