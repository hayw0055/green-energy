

var masthead;
var slides = [];
var buttons;
var contents;
var container;
var i = 0;
var k;

var masthead = document.querySelector(".mh-image");

var slides = [
"<figure><img src=\"./img/slider1.png\" alt=\"Solar Panel's\"></figure>",
"<figure><img src=\"./img/slider2.png\" alt=\"Wind Mill\"></figure>",
"<figure><img src=\"./img/slider3.png\" alt=\"LED Light\"></figure>",
"<figure><img src=\"./img/slider4.png\" alt=\"Shower Head\"></figure>"]
;
 

function fadeOut() {
    "use strict";
    masthead.style.opacity = 0;
}

function runSlides() {
    "use strict";
    masthead.style.opacity = "1";
    if (i > 3) {
        i = 0;
    }
    masthead.innerHTML = slides[i];
    i += 1;
    setTimeout(fadeOut, 5000);
}
runSlides();
setInterval(runSlides, 6000);

var buttons = document.querySelectorAll(".btn");

contents = [
    "<figure><img src=\"./img/showerdown.jpg\" alt=\"Shower\"><figcaption><h1>Low Flow Shower Heads</h1><p>We make Green Energy afforable by collaborating with the goverment to bring you discounted prices on products that will reduce the energy your home uses and make you  more energy efficient. That being said our low flow shower heads are 25%.</p></figcaption></figure>",
    "<figure><img src=\"./img/led.jpg\" alt=\"Bulb Icon\"><figcaption><h1>LED Lights</h1><p>We make Green Energy afforable by collaborating with the goverment to bring you discounted prices on products that will reduce the energy your home uses and make you  more energy efficient. That being said our LED lights are free to you if you bring in and exchange your old hylogen lights. That’s right free new LED lights.</p></figcaption></figure>",
    "<figure><img src=\"./img/solarpanel.jpg\" alt=\"Solar panel Icon\"><figcaption><h1>Solar Panels</h1><p>We make Green Energy afforable by collaborating with the goverment to bring you discounted prices on products that will reduce the energy your home uses and make you  more energy efficient. That being said you can install Solar Panels on your roof at 50% off the cost. The goverment provides a 50% rebate to anyone that changes to solar panels</p></figcaption></figure>"
];

container = document.querySelector(".container");

container.innerHTML = contents[0];

function handleClick(ev) {
    console.log(ev.target.innerHTML);
    for (i = 0; i < buttons.length; i += 1) {
        if (buttons[i].hasAttributes("id")) {
            buttons[i].removeAttribute("id");
        }
    }
    if (ev.target.innerHTML === "1") {
        container.innerHTML = contents[0];
    }
    if (ev.target.innerHTML === "2") {
        container.innerHTML = contents[1];
    }
    if (ev.target.innerHTML === "3") {
        container.innerHTML = contents[2];
    }
    ev.target.parentNode.setAttribute("id", "active");
}
for (k = 0; k < buttons.length; k += 1) {
    buttons[k].addEventListener("click", handleClick, false);
}   


