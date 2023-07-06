
// Change the img of landing page(header)
let landingPage = document.querySelector(".landing-page")

// select span(s) in options box
let randomBackground = document.querySelectorAll(".option-box span")

let imgArr =
 [
    "../images/running-1.jpg", 
    "../images/running-3.jpg",
    "../images/running-4.jpg"
]

let homePage = document.getElementById("link")
//console.log(homePage)
// convert homePage balise to a string
let home= homePage.outerHTML


// Random background option
let backgroundOption = true;

// variable to controle the background Interval
let theBackgroundInterval;

// Check if there's local storage Random background
let backgroundLocalItem = localStorage.getItem("background_option")

// Check if local storage Random background no empty
if(backgroundLocalItem !== null)
{
    if((backgroundLocalItem === 'true') && (home.includes("active")))
    {
        backgroundOption = true
    }else
    {
        backgroundOption = false
    }

    randomBackground.forEach(bg => bg.classList.remove("active"))
}

if(backgroundLocalItem === 'true')
{
    document.querySelector(" span.yes").classList.add("active")
}else
{
    document.querySelector(" span.no").classList.add("active")
}

function randomizeImgs()
{
    if((backgroundOption === true) && (home.includes("active")))
    {
     theBackgroundInterval =  setInterval(() => {
            let randomNumber = Math.floor(Math.random() *  imgArr.length)    
            landingPage.style.backgroundImage = 
            'url("../images/' + imgArr[randomNumber]+'")'
        
        }, 1000);
    }else 
    {
        clearInterval(theBackgroundInterval)
    }
}

/* switch background randomColor */



// Default value .. "Random background"
   randomizeImgs()
    randomBackground.forEach(bg => {
        bg.addEventListener("click", function(e)
        {          
        e.target.parentElement.querySelectorAll('.active')
        .forEach(span => span.classList.remove("active"))
            
        this.classList.add("active")

         // change to random background 
            if(e.target.dataset.background === "yes")
            {
                backgroundOption = true
                localStorage.setItem("background_option", true) 
            }else
            {
                backgroundOption = false
                localStorage.setItem("background_option", false)
            }
           
            randomizeImgs()
        })
       
    })





// Change the color of header links (active link)
let links = document.querySelector(".header-area ul").querySelectorAll("li a") 
let randombg = document.getElementById("random-bg")

links.forEach(link => {
    

link.addEventListener("click", function()
{
    links.forEach(li => li.classList.remove("active"))
    this.classList.add("active")
    //console.log(location.href.outerHTML)
    
    
})
})

window.onload= function()
    {
    if ( location.href !== "http://127.0.0.1:5500/index.html")
{
    //console.log("yes")
        randombg.style.cssText = "display:none"
}else
{
    //console.log("no")
    randombg.style.cssText = "display:flex"
}
}
// Change the positon left of settings

let settingsBox = document.querySelector(".setting-box")
let settingGear = document.querySelector(".toggle-spin .fa-gear")


settingGear.addEventListener("click", function() {

    this.classList.toggle("fa-spin")
   settingsBox.classList.toggle("open")
 
})


let elements = document.querySelector(".color-list").querySelectorAll("li")
let storedColor = window.localStorage.getItem("color-list")

// change theme color
let alternateStyles = document.querySelectorAll(".alternate-style")
 

function setActiveStyle(color)
{
   
     // Access the root element
   let rootElement = document.documentElement;

   // Access The styles of root element
   let style1 = window.getComputedStyle(rootElement);   
    alternateStyles.forEach((st) => {
               
        if(color === st.getAttribute("title"))
        {
            st.removeAttribute("disabled")          
        }
       
        else {
            st.setAttribute("disabled", "true") 
        }
         
    })
   
   
   
               

   // add color to local storage

   elements.forEach(element => {
     
       element.addEventListener("click", function()
       {
       
           elements.forEach(li => li.classList.remove("active"))
           this.classList.add("active")
           
                            // Returns --skin-color value
     let skinColor = style1.getPropertyValue('--skin-color');
    // rootElement.style.setProperty('--skin-color', skinColor);
   // document.documentElement.style.setProperty('--skin-color', storedColor);
    localStorage.setItem("color-list", skinColor)
          
        
 
       })
       
       })


}





// function loadPage(url) {
//     fetch(url)
//       .then(response => response.text())
//       .then(data => {
//         document.getElementById("").innerHTML = data;
//         history.pushState({}, '', url);
//       });
//   }

//   window.onpopstate = function(event) {
//     event.preventDefault()
//     loadPage(location.pathname);
// };