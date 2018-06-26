console.log("hello world")





const playSound = (e) => {
  var key = e.keyCode
  switch(key) {
    case 65:
      var audio = new Audio("sounds/clap.wav");
      break;
    case 83:
      var audio = new Audio("sounds/hihat.wav");
      break;
    case 68:
      var audio = new Audio("sounds/kick.wav");
      break;
    case 70:
      var audio = new Audio("sounds/openhat.wav");
      break;
    case 71:
      var audio = new Audio("sounds/boom.wav");
      break;
    case 72:
      var audio = new Audio("sounds/ride.wav");
      break;
    case 74:
      var audio = new Audio("sounds/snare.wav");
      break;
    case 75:
      var audio = new Audio("sounds/tom.wav");
      break;
    case 76:
      var audio = new Audio("sounds/tink.wav");
      break;
    default:
      break;
  }

  audio.play();
}










window.addEventListener('keydown', playSound);
