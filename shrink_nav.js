const nav=document.querySelector(".navbar")
window.addEventListener("scroll",function () {
    if(window.scrollY===0){
     nav.classList.remove("shrink")
    }else{
        nav.classList.add("shrink")
    }
  })