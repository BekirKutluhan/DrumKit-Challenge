var numberOfDrumButtons = document.querySelectorAll(".drum").length;

document.addEventListener("keypress", function() {
  var buttonTriggered=event.key;
  console.log(buttonTriggered);
  switch (buttonTriggered) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
    document.querySelectorAll(".drum")[0].classList.add("pressed");
      setTimeout(function() {document.querySelectorAll(".drum")[0].classList.remove("pressed")},200);
      break;
    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      document.querySelectorAll(".drum")[1].classList.add("pressed");
        setTimeout(function() {document.querySelectorAll(".drum")[1].classList.remove("pressed")}, 200);
      break;
    case "s":
      tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      document.querySelectorAll(".drum")[2].classList.add("pressed");
        setTimeout(function() {document.querySelectorAll(".drum")[2].classList.remove("pressed")}, 200);
      break;
    case "d":
      tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      document.querySelectorAll(".drum")[3].classList.add("pressed");
        setTimeout(function() {document.querySelectorAll(".drum")[3].classList.remove("pressed")}, 200);
      break;
    case "j":
      snare = new Audio("sounds/snare.mp3");
      snare.play();
      document.querySelectorAll(".drum")[4].classList.add("pressed");
        setTimeout(function() {document.querySelectorAll(".drum")[4].classList.remove("pressed")}, 200);
      break;
    case "k":
      crash = new Audio("sounds/crash.mp3"),
        crash.play();
      document.querySelectorAll(".drum")[5].classList.add("pressed");
      setTimeout(function() {document.querySelectorAll(".drum")[5].classList.remove("pressed")}, 200);
      break;
    case "l":
      kickBass = new Audio("sounds/kick-bass.mp3");
      kickBass.play();
      document.querySelectorAll(".drum")[6].classList.add("pressed");
      setTimeout(function() {document.querySelectorAll(".drum")[6].classList.remove("pressed")}, 200);
      break;
    default:
      console.log(buttonTriggered);
  }


});

for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
  var buttonClicked=event.target.innerHTML;
  console.log(buttonClicked);
  switch (buttonClicked) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
    document.querySelectorAll(".drum")[0].classList.add("pressed");
      setTimeout(function() {document.querySelectorAll(".drum")[0].classList.remove("pressed")},200);
      break;
    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      document.querySelectorAll(".drum")[1].classList.add("pressed");
        setTimeout(function() {document.querySelectorAll(".drum")[1].classList.remove("pressed")}, 200);
      break;
    case "s":
      tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      document.querySelectorAll(".drum")[2].classList.add("pressed");
        setTimeout(function() {document.querySelectorAll(".drum")[2].classList.remove("pressed")}, 200);
      break;
    case "d":
      tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      document.querySelectorAll(".drum")[3].classList.add("pressed");
        setTimeout(function() {document.querySelectorAll(".drum")[3].classList.remove("pressed")}, 200);
      break;
    case "j":
      snare = new Audio("sounds/snare.mp3");
      snare.play();
      document.querySelectorAll(".drum")[4].classList.add("pressed");
        setTimeout(function() {document.querySelectorAll(".drum")[4].classList.remove("pressed")}, 200);
      break;
    case "k":
      crash = new Audio("sounds/crash.mp3"),
        crash.play();
      document.querySelectorAll(".drum")[5].classList.add("pressed");
      setTimeout(function() {document.querySelectorAll(".drum")[5].classList.remove("pressed")}, 200);
      break;
    case "l":
      kickBass = new Audio("sounds/kick-bass.mp3");
      kickBass.play();
      document.querySelectorAll(".drum")[6].classList.add("pressed");
      setTimeout(function() {document.querySelectorAll(".drum")[6].classList.remove("pressed")}, 200);
      break;
    default:
      console.log(buttonClicked);
  }
  });

}
