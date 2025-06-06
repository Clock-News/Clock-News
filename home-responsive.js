document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");

  menuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("active");
  });

  // Toggle dropdowns in mobile menu
  const dropdowns = navLinks.querySelectorAll(".dropdown > .dropbtn");

  dropdowns.forEach(dropbtn => {
    dropbtn.addEventListener("click", function (e) {
      e.preventDefault(); // prevent link default
      const dropdownParent = this.parentElement;
      dropdownParent.classList.toggle("active");
    });
  });
});
