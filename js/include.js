const header = document.querySelector("header");
const footer = document.querySelector("footer");

fetch("../components/header.html")
  .then((res) => res.text())
  .then((data) => {
    header.innerHTML = data;
  });

fetch("../components/footer.html")
  .then((res) => res.text())
  .then((data) => {
    footer.innerHTML = data;
  });
