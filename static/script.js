function mobileNav() {
   let navbutton = document.getElementById('hamburger')
   let menu = document.getElementById('drawer')
   console.log('hello')
   navbutton.addEventListener("click", () => {
       console.log('click')
       console.log(menu.classList)
        if(menu.classList.contains('active')) {
            menu.classList.remove('active')
        } else {
            menu.classList.add('active')
        }
   }) 
}

function passwordVisibilityToggle() {
    let passwordInput = document.getElementById('password-field')
    let passwordVisibility = document.getElementById('passwordVisibilityIcon')
    passwordVisibility.addEventListener("click", () => {
        if(passwordVisibility.classList.contains('active')) {
            passwordVisibility.classList.remove('active')
            passwordInput.type = 'password'
        } else {
            passwordVisibility.classList.add('active')
            passwordInput.type = 'text'
        }
    })
}

passwordVisibilityToggle()
mobileNav()