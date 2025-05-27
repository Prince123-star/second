// function toggleSidebar() {
//   document.getElementById("sidebar").classList.toggle("active");
// }

function openSidebar() {
  document.getElementById("sidebar").classList.add("active");
}

function closeSidebar() {
  document.getElementById("sidebar").classList.remove("active");
}

function toggleTheme() {
  const body = document.body;
  const icon = document.querySelector(".theme-toggle i");

  if (body.classList.contains("dark")) {
    body.classList.replace("dark", "light");
    icon.classList.replace("fa-moon", "fa-sun");
  } else {
    body.classList.replace("light", "dark");
    icon.classList.replace("fa-sun", "fa-moon");
  }
}