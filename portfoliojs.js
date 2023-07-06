let menuicon=document.querySelector("#menu")

let navbar=document.querySelector(".navbar")




// let sections=document.querySelectorAll("section")
// let navlinks=document.querySelectorAll("header nav a")

// window.onscroll=()=>{
//     sections.forEach(sec =>{
//         let top=window.scrollY;
//         let offset= sec.offsetTop - 100;
//         let height=sec.offsetHeight;
//         let id= sec.getAttribute('id');
//         console.log("jeje")

//         if(top >= offset && top < offset + height){
//             navlinks.forEach(links =>{
//                 links.classList.remove("active") 
//                 document.querySelectorAll('header nav a[href*="' + id + '"]').classList.add("active");


//             })
//             sec.classList.add("show-animate")
//         }else{
//             sec.classList.remove("show-animate")
//         }

//     })
// }

let sections = document.querySelectorAll("section");
let navlinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 100;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");
    console.log("jeje");

    if (top >= offset && top < offset + height) {
      navlinks.forEach((link) => {
        link.classList.remove("active");
      });
      document.querySelector('header nav a[href*="' + id + '"]').classList.add("active");

      sec.classList.add("show-animate");
    } else {
      sec.classList.remove("show-animate");
    }
  });
};

window.onscroll=()=>{
    let header=document.querySelector("header")
    header.classList.toggle("sticky",window.scrollY > 100)
}

// function myFunction() {
//     var x = document.querySelector(".navbar");
//     if (x.style.display === "block") {
//       x.style.display = "none";
//     } else {
//       x.style.display = "block";
//     }
//   }

// function myFunction() {
//     var x = document.querySelector(".navbar");
//     if (x.className === "navbar") {
//       x.className += " responsive";
//     } else {
//       x.className = "navbar";
//     }
//   }



function toggleMenu() {
    var navbar = document.querySelector(".navbar");
    navbar.classList.toggle("show");
}

// Add the following code to hide the navbar by default
// document.addEventListener("DOMContentLoaded", function() {
//     var navbar = document.querySelector(".navbar");
//     navbar.classList.add("hide");
// });


// function jeje() {
//     console.log("test")
//     var x = document.querySelector(".navbar");
//     if (x.className === "navbar") {
//       x.className += " responsive";
//     } else {
//       x.className = "navbar";
//     }
//   }


  document.querySelector('.hamburger').addEventListener('click', function () {
    document.querySelectorAll('.navbar a').forEach(function(jeje){
        console.log(jeje)
            jeje.classList.toggle("active")
    })
    
    // .classList.toggle('active');
  });

