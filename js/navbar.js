const navContainer = document.getElementById('side-nav-container')
const nvBtnOpen = document.querySelector('.open-btn')
const navBtnClose = document.querySelector('.close-btn')

nvBtnOpen.addEventListener('click', () => {
    openNav()
})

navBtnClose.addEventListener('click', () => {
    closeNav()
})

function openNav() {
    navContainer.style.display = 'block'
}

function closeNav() {
    navContainer.style.display = 'none'
}