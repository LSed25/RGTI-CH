var active = false;
let counter = 0;
let numChicken = 10;
let overall = 10;
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
            location.href = 'loss.html';
          }
    }, 1000);

}

export function timer() {
    if( active == false ) {
        active = true;
        start_timer();
    }
}

export function count() {
    counter++;
    document.getElementById("counter").innerHTML = counter;
    numChicken--;
    document.getElementById("chickens").innerHTML = numChicken;
    if(counter == overall) {
        document.getElementById("text").innerHTML = "Cas da zapustis hlev!";
    }
}

export function check() {
    if(counter == overall) {
        location.href = 'win.html';
    }else{
        location.href = 'loss.html';
    }
}