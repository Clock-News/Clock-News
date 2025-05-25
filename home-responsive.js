const menuToggle = document.getElementById("menuToggle");
const header = document.querySelector(".header");

menuToggle.addEventListener("click", () => {
  header.classList.toggle("nav-active");
});

document.querySelectorAll('.nav-links li').forEach(item => {
  item.addEventListener('click', function(e) {
    if (this.querySelector('.dropdown-content')) {
      e.stopPropagation();
      e.preventDefault();

      document.querySelectorAll('.nav-links li').forEach(li => {
        if (li !== this) li.classList.remove('show');
      });

      this.classList.toggle('show');
    }
  });
});

document.addEventListener('click', function () {
  document.querySelectorAll('.nav-links li').forEach(item => {
    item.classList.remove('show');
  });
});
