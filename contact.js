

  const sidenav = document.getElementById("sidenav");
  const menuicon = document.getElementById("menuicon");
  const closenav = document.getElementById("close-nav");

  menuicon.addEventListener("click",function (){
    sidenav.style.right = "0";
    console.log("click")
  });

  closenav.addEventListener("click",function () {
    sidenav.style.right = "-50%";
  });
