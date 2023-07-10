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

  const stick1 = document.getElementsByClassName('color')[0]
const stick2 = document.getElementsByClassName('color2')[0]
const stick3 = document.getElementsByClassName('brush3')[0]
const lines = document.getElementsByClassName('lines')[0]

// make reverse animations trigger
setTimeout(() => {
    stick2.style.animation = 'movedown 0.5s ease forwards'
}, 3000)

setTimeout(() => {
    stick3.style.animation = 'movedown 0.5s ease forwards'
}, 3500)

setTimeout(() => {
    stick1.style.animation = 'opacity 0.5s ease forwards'
    lines.style.display = 'flex'
}, 4000)


// lets create some random lines width random margins or gaps

let colors = [
    '#133286',
    '#3062af',
    '#FFF',
    '#4a7fcb',
    '#133286',
    '#3062af',
    '#628ace',
    '#949fd9',
    '#821e12',
    '#c34821',
    'red',
    '#d3ad94',
    'yellow',
    '#821e12',
    '#462652',
    '#b16f67',
    '#d3ad94',
    '#821e12',
    '#462652',
    '#4a7fcb',
    '#133286',
    '#3062af',
    '#628ace',
    '#b16f67',
    '#d3ad94',
    'yellow',
    '#821e12',
    '#821e12',
    '#c34821',
    '#821e12',
    '#c34821',
    'red',
]

colors.map((color) => {
    const line = document.createElement('div');
    const randomMargin = Math.floor(Math.random() * 1000);

    line.className = 'line';
    line.style.setProperty('--m', `${randomMargin}px`);
    line.style.setProperty('--c', color);
    lines.appendChild(line)
})

 const allpage=document.querySelector(".all")
 const netflix=document.querySelector(".background")


 function jej() {
    allpage.style.display="block"
    netflix.style.display="none"
    console.log("test time")
}
setTimeout(jej, 6000);