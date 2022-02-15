function keyDown() {
  if (event.keyCode == 13) {
    getDate();
    event.preventDefault();
  }
}

function getDate() {
  var dateTxt = document.getElementById("date").value;
  fetch(
    "https://api.nasa.gov/planetary/apod?api_key=rWjnBrZcElC81cOY6VHdKeYldALXow6Kli2irU88&date=" +
      dateTxt
  )
    .then((res) => res.json())
    .then((data) => {
      var day = (document.getElementById("day").innerHTML = data.date);
      var title = (document.getElementById("title").innerHTML = data.title);
      var img = (document.getElementById("image").src = data.url);
      var ex = (document.getElementById("ex").innerHTML = data.explanation);
    });
}

function getTodayDate() {
  fetch(
    "https://api.nasa.gov/planetary/apod?api_key=rWjnBrZcElC81cOY6VHdKeYldALXow6Kli2irU88"
  )
    .then((res) => res.json())
    .then((data) => {
      var day = (document.getElementById("day").innerHTML = data.date);
      var title = (document.getElementById("title").innerHTML = data.title);
      var img = (document.getElementById("image").src = data.url);
      var ex = (document.getElementById("ex").innerHTML = data.explanation);
    });
}
