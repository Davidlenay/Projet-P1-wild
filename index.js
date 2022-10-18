const sidenav = document.querySelector("#mySidenav"); 
      openBtn = document.querySelector("#openBtn");
      closeBtn = document.querySelector("#closeBtn");
      logo = document.querySelector(".logo-general");
      articleLe = document.querySelector(".le");
      ribbon = document.querySelector(".baniere-header");

openBtn.onclick = openNav;
closeBtn.onclick = closeNav;


function openNav() {
  sidenav.classList.add("active");
  logo.style.zIndex = "5";
  ribbon.style.zIndex = "5";
}


function closeNav() {
  sidenav.classList.remove("active");
  logo.style.zIndex = "1";
  ribbon.style.zIndex = "1";
  articleLe.style.zIndex = "2";
}