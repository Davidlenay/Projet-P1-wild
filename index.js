const sidenav = document.querySelector("#mySidenav"); 
      openBtn = document.querySelector("#openBtn"); /*menu burger*/
      closeBtn = document.querySelector("#closeBtn"); /*croix fermeture*/
      logo = document.querySelector(".logo-general"); /*logo note de musique*/
      articleLe = document.querySelector(".le"); /* LE */
      
if(openBtn && closeBtn) {
  openBtn.onclick = openNav;
  closeBtn.onclick = closeNav;
}

function openNav() {
  sidenav.classList.add("active");
  logo.style.zIndex = "5";
  articleLe.style.zIndex = "1";
}


function closeNav() {
  sidenav.classList.remove("active");
  logo.style.zIndex = "1";
  articleLe.style.zIndex = "2";
}
////////////message alerte Nav2////////////


const messageP2 = " Merci, Un professionnel disponible et compétent prendra contact avec toi par mail pour mettre en place des cours particulier."
const btnSubmit = document.querySelector("#buttonProf");

  btnSubmit?.addEventListener("click", function(event) {
    console.log(event)
    event.preventDefault();
    alert(messageP2);
  });

  ////////////message alerte Nav1////////////

  const messageNAv1 = "La recherche Map sera peut-être disponible dans une V2";
  const buttonSearch = document.querySelector("#buttonSearch");

  buttonSearch?.addEventListener("click", function(event) {
    console.log(event)
    event.preventDefault();
    alert(messageNAv1);
  });


  ///////////////////////Function son checkbox//////////////////////


  


  

  




  


