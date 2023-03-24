const container = document.querySelector('.container-card')
const btnAll = document.getElementById('all')
const btnByAge = document.getElementById('byAge')
const btnBySection = document.getElementById('bySection')
const students = [
    {
        name: "Julien",
        age: 35,
        section: "Web",
        year: 3,
        citation: "Dans la vie, soit t'es un lama, soit on te crache dessus."
    },
    {
        name: "Laura",
        age: 19,
        section: "Audio",
        year: 2,
        citation: "Le yoga, c'est comme un élastique, tu commences tendue, et tu finis toute détendue."
    },
    {
        name: "Daniel",
        age: 18,
        section: "Film",
        year: 1,
        citation: "Le cinéma c'est le reflet de l'âme du réalisateur."
    },
    {
        name: "Nina",
        age: 33,
        section: "Audio",
        year: 3,
        citation: "Il a pas dit bonjour, on lui a ***** sa mère."
    },
    {
        name: "Jeanine",
        age: 25,
        section: "Web",
        year: 1,
        citation: "Des fois je trouve sur le google dans les internets."
    },
    {
        name: "Aline",
        age: 29,
        section: "Film",
        year: 2,
        citation: "Je suis une actrice née pour jouer des rôles."
    },
]

displayAll(students)
btnAll.addEventListener('click', () => {
    container.innerHTML = ""
    displayAll(students)
})
btnByAge.addEventListener('click', () => {
    container.innerHTML = ""
    displayByAge(students)
})
btnBySection.addEventListener('click', () => {
    container.innerHTML = ""
    displayBySection(students)
})

function displayAll(array) {
    createElementToDisplay(array)
}

function displayByAge(array) {
    let newArray = array.sort((a, b) => (a.age > b.age ? 1 : -1))
    createElementToDisplay(newArray)
}

function displayBySection(array) {
    let audioS = []
    let webS = []
    let filmS = []
    let final = []

    array.forEach((el) => {
        if (el.section.toLowerCase() === 'audio') {
            audioS.push(el)
        }
        if (el.section.toLowerCase() === 'film') {
            filmS.push(el)
        }
        if (el.section.toLowerCase() === 'web') {
            webS.push(el)
        }

        final = [...audioS, ...filmS, ...webS]
    })
    createElementToDisplay(final)
}

function createElementToDisplay(array) {
    array.forEach((student) => {
        let div = document.createElement('div')
        let name = document.createElement('h1')
        let age = document.createElement('p')
        let section = document.createElement('h3')
        let year = document.createElement('p')
        let citationContainer = document.createElement('p')
        let citation = document.createElement('i')

        div.classList.add('card')
        name.classList.add('card-title')
        age.classList.add('card-age')
        section.classList.add('card-section')
        year.classList.add('card-year')
        citationContainer.classList.add('card-citation')

        name.textContent = student.name
        age.textContent = student.age + ' ans'
        section.textContent = student.section
        year.textContent = 'Année: ' + student.year
        citation.textContent = student.citation

        div.appendChild(name)
        div.appendChild(age)
        div.appendChild(section)
        div.appendChild(year)
        citationContainer.appendChild(citation)
        div.appendChild(citationContainer)

        container.appendChild(div)
    })
}


