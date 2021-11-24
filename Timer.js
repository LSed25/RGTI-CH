var active = false;

export default function start_timer() {
    var countDownDate = new Date(Date.now() + (2 * 60 * 1000));

    var x = setInterval(function() {
        var now = new Date(Date.now());
        var distance = countDownDate - now;

        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("timer").innerHTML = minutes + "m " + seconds + "s";

        if (distance < 0) {
            clearInterval(x);
            document.getElementById("timer").innerHTML = "ČAS JE POTEKEL";
            window.alert("ČAS JE POTEKEL");
          }
    }, 1000);

}

export function changeState() {
    if( active == false ) {
        active = true;
        start_timer();
        console.log("Start");
    }
}