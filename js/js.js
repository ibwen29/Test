/**
 * Created by ibwen29 on 2017/12/13.
 */
window.onload=function() {
    var box = document.getElementById("box");
    var lunbo = document.getElementById("lunbo");
    /*var span1=document.getElementById("span1");*/
    var list = document.getElementById("list");
    /*span1.onclick=function(){
     nextP()
     console.log(123);
     }*/
    function nextP() {
        index++;
        if (index > 4) {
            index = 0;
        }
        current();
        var newleft;
        if (lunbo.style.left == "-8000px") {
            newleft = 0;
        } else {
            newleft = parseInt(lunbo.style.left) - 2000;
        }
        lunbo.style.left = newleft + "px";
    }

    var time = null;

    function autoplay() {
        time = setInterval(nextP, 1500);
    }

    autoplay();
    list.onmouseenter = function () {
        clearInterval(time);
    }
    list.onmouseleave = function () {
        autoplay();
    }
    var spnbtn = list.getElementsByTagName("li");
    var index = 0;

    function current() {
        for (var i = 0; i < spnbtn.length; i++) {
            spnbtn[i].className = "";
        }
        spnbtn[index].className = "on";
    }
}