//Intialise the variables 
const sidebar = document.querySelector(".sidebar");
const submenuItem = document.querySelector(".dropdown");
const sidebarToggle = document.querySelector("#sidebarOpen");
const sidebarExpand= document.querySelector(".expand_sidebar");
const sidebarCollapse = document.querySelector(".collapse_sidebar");

function updateSidebarControls() {
    if (sidebar.classList.contains("close")) {
        sidebarExpand.style.display="flex";
        sidebarCollapse.style.display="none";

    } else {
        sidebarExpand.style.display="none";
        sidebarCollapse.style.display="flex";
    }
}

//When the side bar is clicked when collapsed
sidebarCollapse.addEventListener("click", () => {
    sidebar.classList.add("close", "hoverable");
    updateSidebarControls();
})


//When the side bar is clicked when expanded
sidebarExpand.addEventListener("click", () => {
    sidebar.classList.remove("close", "hoverable");
    updateSidebarControls();
})


// Open and close sidebar 
sidebarToggle.addEventListener("click", () => {
      sidebar.classList.toggle("close");
      sidebar.classList.toggle("hoverable");
      updateSidebarControls();
});

//Temporary open and close 
sidebar.addEventListener("mouseenter", () => {
    if(sidebar.classList.contains("hoverable")) {
        sidebar.classList.remove("close");
    }
});

sidebar.addEventListener("mouseleave", () => {
    if(sidebar.classList.contains("hoverable")) {
        sidebar.classList.add("close");
    }
});

//Dropdown Visibility
submenuItem.addEventListener("click", () =>{
    submenuItem.classList.toggle("show_submenu");


});


//Responsive 
if(window.innerWidth < 768) { 
    sidebar.classList.add("close");

}else {
    sidebar.classList.remove("close");
}
updateSidebarControls()
