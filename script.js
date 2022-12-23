const toggleButton = document.querySelector(".toggle");
const cardSelect = document.querySelectorAll(".card");

toggleButton.addEventListener("click", function () {
  document.querySelector(".mover").classList.toggle("mover-active");

  document.querySelector(".mode").innerHTML =
    document.querySelector(".mode").innerHTML == "Dark Mode"
      ? "Light Mode"
      : "Dark Mode";
  document.querySelector(".body").classList.toggle("body-light");

  document.querySelector(".head-bg").classList.toggle("head-bg-light");

  cardSelect.forEach((element) => {
    element.classList.toggle("card-light");
  });
  //   document.querySelectorAll(".card").classList.toggle("card-light");
});
