const menu = document.querySelector('.menuOption')
const burgerBotton = document.querySelector('.burgerMenu')
burgerBotton.addEventListener('click',hideShow)
function hideShow(){
    if (menu.classList.contains('is-active')){
        menu.classList.remove('is-active')
    } else {
        menu.classList.add('is-active')
    }
}