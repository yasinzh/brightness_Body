const input = document.getElementById("range");

input.addEventListener("change", function (event) {
  console.log(event.target.value);
  document.body.style.filter = "brightness(" + event.target.value + "%)";
});
