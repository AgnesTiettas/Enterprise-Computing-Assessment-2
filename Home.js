
//Initalise values 
const sidebar =document.querySelector(".sidebar");
const sidebarToggler = document.querySelector(".sidebar-toggler");
const menuToggler = document.querySelector(".menu-toggler");

//Makes sure that the height values of the sidebar match 

//Inital Height
let NormalSidebarHeight= "calc(100vh - 32px)";

//Height when collapsed
let collapsedSidebarHeight ="56px";

//Make the sidebar collapse 
sidebarToggler.addEventListener("click", () => {
    sidebar.classList.toggle("collapsed");
});

//Update the height of the sidebar and menu toggle the text
const toggleMenu = (isMenuActive) => {
  sidebar.style.height = isMenuActive ? `${sidebar.scrollHeight}px` : collapsedSidebarHeight;
  menuToggler.querySelector("span").innerText = isMenuActive ? "close" : "menu";
}


