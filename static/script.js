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
console.log('hello')

mobileNav()