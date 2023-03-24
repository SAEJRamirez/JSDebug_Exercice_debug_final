
//Variables et constantes
let formContainer = document.querySelector('.form-container')
let fname = document.getElementById('fname')
let lname = document.getElementById('lname')
let email = document.getElementById('email')
let message = document.getElementById('message')
let infoFname = document.getElementById('infoFname')
let infoLname = document.getElementById('infoLname')
let infoEmail = document.getElementById('infoEmail')
let infoMessage = document.getElementById('infoMessage')
let btn = document.querySelector('.btn-submit')
let modalContainer = document.querySelector('.modal-info')
let modalTitle = document.querySelector('.modal-title')
let modalText = document.querySelector('.modal-text')
let modalMessage = document.querySelector('.modal-message')
let btnCloseModal = document.querySelector('.btn-modal')

//Ecoute de l'événement "click" sur le bouton "submit"
btn.addEventListener('click', (e) => {
    e.preventDefault()
    validateForm()
    resetInput()
})

//Fonction de validation de formulaire
function validateForm() {
    //Variables et contentes de la fonction
    let dataForm = [fname, lname, email, message]
    let infos = [infoFname, infoLname, infoEmail, infoMessage]
    const emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    let error = false

    //Boucle pour vérifier si les champs sont vides et afficher un message d'erreur
    dataForm.forEach((data, index) => {
        if (data.value === "" || data.value === null) {
            infos[index].textContent = "Ce champs est requis"
            infos[index].style.opacity = "100%"
            error = true
        }
    })

    //Condition pour vérifier si l'email est valide et afficher un message d'erreur
    if (!emailRegExp.test(email.value)) {
        infoEmail.textContent = "Votre adresse e-mail est invalide"
        infoEmail.style.opacity = "100%"
        error = true
    }

    //Affichage du résumé des informations entrées par l'utilisateur s'il n'y a pas d'erreur
    if (!error) {
        formContainer.style.opacity = "60%"
        modalContainer.style.display = "flex"
        modalTitle.textContent = `Merci ${lname.value} ${fname.value}.`
        modalText.textContent = `Nous vous contacterons prochainement à cette l'adresse email ${email.value} afin de répondre à votre demande.`
        modalMessage.textContent = `Votre message: "${message.value}"`
        dataForm.forEach((data, index) => {
            infos[index].textContent = ""
            infos[index].style.opacity = "0"
        })
        error = false
    }

}

//Ecoute de l'événement "click" sur le bouton "Fermer" de la fenêtre modale
//Redirection sur la page d'accueil
btnCloseModal.addEventListener('click', () => {
    modalContainer.style.display = "none"
    window.location.href = "../pages/Home.html"
})

//Fonction pour réinitialiser les inputs après envoie
function resetInput() {
    fname.value = ""
    lname.value = ""
    email.value = ""
    message.value = ""
}

