// Import stylesheets
import "./style.css";

var cityElems = Array.from(document.getElementsByClassName("città"));
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
  request.open(
    "GET",
    "https://api.openweathermap.org/data/2.5/weather?APPID=9bd419b49d4261031516ad5fddac3439&units=metric&q=" +
      city,
    true
  );
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
    request.open(
      "GET",
      "https://api.openweathermap.org/data/2.5/weather?APPID=d0fda39104b3c7c45fe031a5392964c1&units=metric&q=" +
        city,
      true
    );
    request.send();
  }
}
