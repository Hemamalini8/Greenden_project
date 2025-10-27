
  const sidenav = document.getElementById("sidenav");
  const menuicon = document.getElementById("menuicon");
  const closenav = document.getElementById("close-nav");
  menuicon.addEventListener("click",function (){
    sidenav.style.right = "0";
    console.log("click")
  });
  closenav.addEventListener("click",function (){
    sidenav.style.right = "-50%";
  });
var search=document.getElementById("search")
var product_list=document.getElementById("product-list")
var key=product_list.querySelectorAll("div")
search.addEventListener("keyup",function(){
    var enter_value=event.target.value.toUpperCase()
    for(i=0;i<key.length;i++){
        var product_name=key[i].querySelector("p").textContent
        if(product_name.toUpperCase().indexOf(enter_value)<0){
            key[i].style.display="none"
        }
        else{
            key[i].style.display="block"
        }

    }
})