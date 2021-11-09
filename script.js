var myButton = document.getElementById("myButton");
var myInput = document.getElementById("myInput");
var fortuneText = document.getElementById("fortuneText")

myButton.addEventListener("click", function() {
  fortune(myInput);
});

function fortune(name) {
  restyle();
  var currentName = name.value;
  var randomFortune = Math.floor(Math.random() * 5);
  if (randomFortune == 0) {
    fortuneText.innerHTML = currentName + ", you will sleep well tonight!";
  }
  else if (randomFortune == 1) {
      fortuneText.innerHTML = currentName + ", you will have a good day today!";
  }
  else if (randomFortune == 2) {
      fortuneText.innerHTML = currentName + ", watch out for evil spirits today!";
  }
  else if (randomFortune == 3) {
      fortuneText.innerHTML = currentName + ", you will have good dreams tonight!";
  }
  else {
      fortuneText.innerHTML = currentName + ", be careful what you wish for today!";
  }
}

function restyle() {
  var randomStyle = Math.floor(Math.random() * 4);
  if (randomStyle == 0) {
    fortuneText.style.fontSize = "20px";
    fortuneText.style.color = "#8D38C8";
    fortuneText.style.fontFamily = "sans-serif";
    fortuneText.style.textDecoration = "none";
  }
  else if (randomStyle == 1) {
    fortuneText.style.color = "#000";
    fortuneText.style.fontSize = "15px";
    fortuneText.style.fontFamily = "sans-serif";
    fortuneText.style.textDecoration = "none";
  }
  else if (randomStyle == 2) {
    fortuneText.style.textDecoration = "line-through";
    fortuneText.style.fontSize = "15px";
    fortuneText.style.color = "#8D38C8";
    fortuneText.style.fontFamily = "sans-serif";
  }
  else {
    fortuneText.style.fontFamily = "serif";
    fortuneText.style.fontSize = "15px";
    fortuneText.style.color = "#8D38C8";
    fortuneText.style.textDecoration = "none";
  }
}
