// Versione semplice, messa nella slide del corso
import "./style.css";

const cityElems = Array.from(document.getElementsByClassName("città"));
const apiKey = "d0475be3a1967b1b49dfc02c8128001a";
const URL =
  "https://api.openweathermap.org/data/2.5/weather?APPID=" +
  apiKey +
  "&units=metric&q=";
for (let elem of cityElems) {
  elem.onclick = () => display(elem.innerHTML);
}
document.getElementById("calcoloMedia").onclick = calcoloMedia;
// Funzione collegata ai bottoni
// "window" necessario in StackBlitz, può essere
// omesso altrimenti
function display(city) {
  var request = new XMLHttpRequest(); // Costruzione dell'oggetto "request"

  // Funzione callback invocata quando la request termina
  request.onload = function() {
    // funzione definita arrow
    if (request.status === 200) {
      var dataObject = JSON.parse(request.response);
      document.getElementById("risposta").innerHTML =
        "A " + city + " ci sono " + dataObject.main.temp + " gradi";
    } else {
      document.getElementById("risposta").innerText = "Errore";
    }
  };

  // Applico il metodo "open"
  request.open("GET", URL + city, true);
  // Applico il metodo send (al termine chiamerà il callback "onload")
  request.send();
}

function calcoloMedia() {
  var media = 0;
  for (let c of cityElems) {
    let city = c.innerHTML;
    let request = new XMLHttpRequest(); // Costruzione dell'oggetto "request"
    request.onload = () => {
      if (request.status === 200) {
        var dataObject = JSON.parse(request.response);
        media += dataObject.main.temp / cityElems.length;
        document.getElementById("media").innerHTML =
          "La media e' di " + media + " gradi";
      } else {
        document.getElementById("media").innerText = "Errore";
      }
    };
    request.open("GET", URL + city, true);
    request.send();
  }
}
