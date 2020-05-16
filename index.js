
for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {

    document.querySelectorAll("button")[i].addEventListener("click", function () {
        makeSound(this.innerHTML);
        animate(this.innerHTML);
    });
}
document.addEventListener("keydown", function(e){
    makeSound(e.key);
    animate(e.key);
});
function animate(key) {
    document.querySelector("." + key).classList.add("pressed");
    setTimeout(function(){document.querySelector("." + key).classList.remove("pressed")}, 30);
}
function makeSound(key) {
    switch (key) {
        case "a":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();

            break;

        case "s":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();

            break;
        case "d":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();

            break;
        case "f":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();

            break;
        case "j":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();

            break;
        case "k":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();

            break;
        case "l":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();

            break;


        default: console.log(button.innerHTML)
            break;
    }
}