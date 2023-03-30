import './styles/main-phones.css'
import './styles/root.css'
import './styles/reset.css'
import './styles/animations.css'
import './styles/modal.css'
import './styles/tablets.css'
import './styles/laptops.css'
import './styles/desktops.css'


// Display the hamburger menu
const modal = document.getElementById('modal')
const mobileButtonOpen = document.querySelector('.fa-bars')
const mobileButtonClose = document.querySelector('.fa-times-circle')

mobileButtonOpen.addEventListener('click', () => {
    modal.style.left = '0%'
})

mobileButtonClose.addEventListener('click', () => {
    modal.style.left = '-100%'
})