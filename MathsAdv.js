//Side bar navigation functions including the toggle
function toggleSidenav() {
  const Sidenavigation = document.querySelector("#sidenav");

  if (window.innerWidth <= 760) {
    Sidenavigation.classList.remove("min");
    Sidenavigation.classList.toggle("active");
  } else {
    Sidenavigation.classList.remove("active");
    Sidenavigation.classList.toggle("min");
  }
}