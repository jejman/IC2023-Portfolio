let menuicon=document.querySelector("#menu")

let navbar=document.querySelector(".navbar")


menuicon.onclick=()=>{
    menuicon.classList.toggle("bx-x");
     navbar.classList.toggle("home");

}

let sections=document.querySelectorAll("section")
let navlinks=document.querySelectorAll("header nav a")

window.onscroll=()=>{
    sections.forEach(sec =>{
        let top=window.scrollY;
        let offset= sec.offsetTop - 100;
        let height=sec.offsetHeight;
        let id= sec.getAttribute('id');
        console.log("jeje")

        if(top >= offset && top < offset + height){
            navlinks.forEach(links =>{
                links.classList.remove("active") 
                document.querySelectorAll('header nav a[href*="' + id + '"]').classList.add("active");


            })
        }
    })
}

window.onscroll=()=>{
    let header=document.querySelector("header")
    header.classList.toggle("sticky",window.scrollY > 100)
}

function myFunction() {
    var x = document.querySelector(".navbar");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }