
/**/

//timer =====================================

countDownDate = new Date("Oct 16, 2026 00:00:00").getTime();
var x = setInterval(function(){
    var now =new Date().getTime();
    var distance = countDownDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60 ));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("hours").innerHTML = hours;
    document.getElementById("mins").innerHTML = minutes;
    document.getElementById("sec").innerHTML = seconds;

    if(distance < 0){
        clearInterval(x);
        document.getElementById("hours").innerHTML ="00";
        document.getElementById("mins").innerHTML = "00";
        document.getElementById("sec").innerHTML = "00";

    }
},1000)
