// U2L3 Build a Counter App
var count = 0;
var countHTML = document.getElementById("count-el");
document.getElementById("count-el").innerText = count;
var saved = document.getElementById("save-p");

function increment() {
    count++;
    console.log(count);
    countHTML.innerText = count;
    console.log(countHTML);
}

function decrement() {
    if (count > 0) {
        count--;
    countHTML.innerText = count;
    }
}

function save() {
    saved.innerText = saved.innerText + " " + count + " -";
}

function reset() {
    count = 0;
    countHTML.innerText = count;
}