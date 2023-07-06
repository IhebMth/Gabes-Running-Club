let  username = document.getElementById("username")
let  password = document.getElementById("password")

let closedEye = document.getElementById("closed-eye")
let openEye = document.getElementById("open-eye")


closedEye.addEventListener("click", function(e)
{
   closedEye.style.display = "none" 
   openEye.style.display = "block"
   password.type = "none"
})

openEye.addEventListener("click", function(e)
{
   openEye.style.display = "none" 
   closedEye.style.display = "block"

   password.type = "password"
})