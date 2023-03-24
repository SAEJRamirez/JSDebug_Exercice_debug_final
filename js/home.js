
//Variables et constantes
const container = document.querySelector('.container-card')
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


//Fonction pour afficher tous les élèves // ERREUR ICI : PAS DE FONCTION
function displayAll(array) {
    createElementToDisplay(array)
}

//Fonction pour trier les élèves selon leur âge // ERREUR ICI : "sort" vide
function displayByAge(array) {
    let newArray = array.sort((a, b) => (a.age > b.age ? 1 : -1))
    createElementToDisplay(newArray)
}

//Fonction pour trier les élèves selon leur section // ERREUR ICI : PAS DE FONCTION
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

//Fonction pour créer les cartes de chaque étudiant puis les implémenter dans le HTML // ERREUR ICI : Parties vides
function createElementToDisplay(array) {
    container.innerHTML = ""
    array.forEach((student) => {
        //Création des éléments HTML
        let div = document.createElement('div')
        let name = document.createElement('h1')
        let age = document.createElement('p')
        let section = document.createElement('h3')
        let year = document.createElement('p')
        let citationContainer = document.createElement('p')
        let citation = document.createElement('i')

        //Ajout des différentes classes
        div.classList.add('card')
        name.classList.add('card-title')
        age.classList.add('card-age')
        section.classList.add('card-section')
        year.classList.add('card-year')
        citationContainer.classList.add('card-citation')

        //Ajout des textes dans les éléments HTML
        name.textContent = student.name
        age.textContent = student.age + ' ans'
        section.textContent = student.section
        year.textContent = 'Année: ' + student.year
        citation.textContent = student.citation

        //Insertion des éléments dans la div
        div.appendChild(name)
        div.appendChild(age)
        div.appendChild(section)
        div.appendChild(year)
        citationContainer.appendChild(citation)
        div.appendChild(citationContainer)

        //Insertion de la div dans le conteneur "container-card"
        container.appendChild(div)
    })
}


