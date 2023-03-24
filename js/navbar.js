
//Variables et constantes
const navContainer = document.getElementById('side-nav-container')
const navBtnOpen = document.querySelector('.open-btn')
const navBtnClose = document.querySelector('.close-btn')

//Ecoute de l'événement "click" sur le bouton "open"
navBtnOpen.addEventListener('click', () => {
    openNav()
})

//Ecoute de l'événement "click" sur le bouton "X"
navBtnClose.addEventListener('click', () => {
    closeNav()
})

//Fonction pour ouvrir le menu de navigation
function openNav() {
    navContainer.style.display = 'block'
}

//Fonction pour fermer le menu de navigation
function closeNav() {
    navContainer.style.display = 'none'
}