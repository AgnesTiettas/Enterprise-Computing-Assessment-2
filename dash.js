const body= document.querySelector("body"); 
const sidebar = document.querySelector(".sidebar");
const submenuItem1 = document.querySelectorAll(".submenu_item")[0];
const submenuItem2 = document.querySelectorAll(".submenu_item")[1];
const sidebarToggle = document.querySelector("#sidebarOpen");
const sidebarExpand= document.querySelector(".expand_sidebar");


// Open and close sidebar 

sidebarToggle.addEventListener("click", () => {
    sidebar.classList.toggle("close");
    if(sidebar.classList.contains("close")) {
        sidebar.classList.add("hoverable");
    } else {
        sidebar.classList.remove("hoverable");
    }
    
});

// Expand the sidebar
sidebarExpand.addEventListener("click", () => {
    sidebar.classList.remove ("close", "hoverable");

});

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

submenuItem1.addEventListener("click", () =>{
    submenuItem1.classList.toggle("show_submenu");
    submenuItem2.classList.remove("show_submenu");

});

submenuItem2.addEventListener("click", () => {
    submenuItem2.classList.toggle("show_submenu");
    submenuItem1.classList.remove("show_submenu");
});


if(window.innerWidth < 768) { 
    sidebar.classList.add("close");

}else {
    sidebar.classList.remove("close")
}

