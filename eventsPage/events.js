
let img = document.getElementById("img");
let name = document.getElementById("name");
let jop = document.getElementById("jop");
let btn = document.getElementById("btn");
let skeletons = document.querySelectorAll(".skeleton");


skeletons.forEach((skeleton) => {
    skeleton.classList.remove("skeleton");
    if (skeleton.classList.toggle("skeleton-img")) {
    skeleton.classList.remove("skeleton-img");
    }
    if (skeleton.classList.toggle("skeleton-text")) {
    skeleton.classList.remove("skeleton-text");
    }
    if (skeleton.classList.toggle("skeleton-btn")) {
    skeleton.classList.remove("skeleton-btn");
    }
    });








    // window.onload = () => {
    //     setTimeout(() => {
    //     skeletons.forEach((skeleton) => {
    //     skeleton.classList.remove("skeleton");
    //     if (skeleton.classList.toggle("skeleton-img")) {
    //     skeleton.classList.remove("skeleton-img");
    //     }
    //     if (skeleton.classList.toggle("skeleton-text")) {
    //     skeleton.classList.remove("skeleton-text");
    //     }
    //     if (skeleton.classList.toggle("skeleton-btn")) {
    //     skeleton.classList.remove("skeleton-btn");
    //     }
    //     });
    //     img.src = "https://www. w3schools .com/howto/img_avatar.png";
    //     name.innerText = "John Doe"
    //     jop.innerText = "Architect & Engineer"
    //     btn.innerText = "Go"
    //     }, 10000)
    //     };