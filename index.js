
var numberOfDrumButtons = document.querySelectorAll(".drum").length;

document.addEventListener("keypress",function(){

    var buttonTriggered = event.key
   switch (buttonTriggered) {
     case  "w":
        var tom1 = new Audio("sounds/tom-1.mp3");
       tom1.play();
       break;
        case "a":
         var tom2 =new Audio("sounds/tom-2.mp3");
         tom2.play();
         break;
         case "s":
         tom3 =new Audio("sounds/tom-3.mp3");
         tom3.play();
         break;
          case "d":
         tom4=new Audio("sounds/tom-4.mp3");
         tom4.play();
         break;
         case "j":
          snare =new Audio("sounds/snare.mp3");
         snare.play();
         break;
         case "k":
        crash=new Audio("sounds/crash.mp3"),
         crash.play();
         break;
         case "l":
         kickBass=new Audio("sounds/kick-bass.mp3");
         kickBass.play();
         break;
     default:console.log(buttonTriggered);

   }
 });
