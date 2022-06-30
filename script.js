window.onscroll = function (){

    var position = window.pageYOffset || document.documentElement.scrollTop;
    var element1 = document.getElementById ("type");
    element1.style.bottom = postion * 0.2
}