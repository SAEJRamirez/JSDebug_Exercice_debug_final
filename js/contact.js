let fname = document.getElementById('fname')
let lname = document.getElementById('lname')
let email = document.getElementById('email')
let message = document.getElementById('message')
let infoFname = document.getElementById('infoFname')
let infoLname = document.getElementById('infoLname')
let infoEmail = document.getElementById('infoEmail')
let infoMessage = document.getElementById('infoMessage')
let btn = document.querySelector('.btn-submit')

btn.addEventListener('click', (e) => {
    e.preventDefault()
    let dataForm = [fname, lname, email, message]
    let infos = [infoFname, infoLname, infoEmail, infoMessage]

    dataForm.forEach((data, index) => {
        if (data.value === "") {
            infos[index].textContent = "Ce champs est requis"
            infos[index].style.opacity = "100%"
        }
    })
    console.log(message.value)

    resetInput()
})

function resetInput() {
    fname.value = ""
    lname.value = ""
    email.value = ""
    message.value = ""
}

