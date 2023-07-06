let username = document.getElementById("username")
let password = document.getElementById("password")
let repeatPass = document.getElementById("repeatPass")
let email = document.getElementById("email")
let submit = document.getElementById("signUp")

let emailRegex = /^[a-zA-Z0-9_%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
let usernameRegex = /^[a-zA-Z0-9._]{3,20}$/;


let names = JSON.parse(localStorage.getItem("names")) || []; 


submit.addEventListener("click", function(e) { 
    let newName = false
    let newEmail = false
    // if( username.value.match(usernameRegex))
    // { 
    //     // names = JSON.parse(localStorage.getItem("names")) || [];
    //     if (names.includes(username.value))
    //     {
    //         newName = false
    //         Swal.fire(
    //             'User name already taken'
    //           )
    //           username.value = ""
    //           username.focus()
              
    //     }else
    //     {
    //      newName = true
    //      names.push(username.value)        
    //     localStorage.setItem("user", JSON.stringify(names))
    //         username.value = ""
    //     }   
        
    
    if((username.value.match(usernameRegex)) && (names.includes(username.value)))
    { 
        // names = JSON.parse(localStorage.getItem("names")) || [];
            Swal.fire(
                'User name already taken'
              )
              newName = false
              username.value = ""
              username.focus()
              
        }else if ((username.value.match(usernameRegex) === null) && (names.includes(username.value)))
        {
            Swal.fire(
                'User name already taken'
              )
              newName = false
              username.value = ""
              username.focus()
        }
        
        
        else
        {
         newName = true
         names.push(username.value)        
        localStorage.setItem("user", JSON.stringify(names))
            // username.value = ""
            
        }   
        
  
        if (email.value.match(emailRegex) )
        {
            
              newEmail = true
        }else
        {
            newEmail= false
            Swal.fire(
                'Please enter a valid email'
              )
        }
        
        if((newName === true ) && (newEmail === true))
        {
         Swal.fire(
            'Good job!',
            'You Have Created An Account!',
            'success'
          )
        }          
    
})




// localStorage.clear()
 
// console.log(names)
// console.log(document.forms[0])