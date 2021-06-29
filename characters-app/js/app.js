const apiHandler = new CharactersApiHandler()

loadCharactersFromAPI()

function loadCharactersFromAPI() {

    apiHandler
        .getAllCharacters()
        .then(response => {
            let characters = ''
            response.data.reverse().forEach(elm => characters += `<li>${elm.name} (${elm.id})<br>Trabajo: ${elm.occupation}<br>Arma: ${elm.weapon}</li>`)
            document.querySelector('#charactersList').innerHTML = characters
        })
        .catch(err => console.log(err))
}


// New character submit
document.querySelector('#newCharacterForm').onsubmit = e => {

    e.preventDefault()          // Evita el envío del formulario

    const inputs = document.querySelectorAll('#newCharacterForm input')

    const character = {
        name: inputs[0].value,
        occupation: inputs[1].value,
        weapon: inputs[2].value
    }

    apiHandler
        .createCharacter(character)
        .then(() => {
            loadCharactersFromAPI()
            document.querySelector('#newCharacterForm').reset()
        })
        .catch(err => console.log(err))
}



// Get character info by ID
document.querySelector('#getCharacterInfoForm').onsubmit = e => {

    e.preventDefault()

    const characterId = document.querySelector('#getCharacterInfoForm input').value

    apiHandler
        .getOneCharacter(characterId)
        .then(response => {
            fillCharacterEditForm(response.data)
            document.querySelector('#getCharacterInfoForm').reset()
        })
        .catch(err => console.log(err))
}



function fillCharacterEditForm(info) {

    const inputs = document.querySelectorAll('#editCharacterForm input')

    inputs[0].value = info.name
    inputs[1].value = info.occupation
    inputs[2].value = info.weapon
    inputs[3].value = info.id                       // Hidden input
}




// Edit character form
document.querySelector('#editCharacterForm').onsubmit = e => {

    e.preventDefault()

    const inputs = document.querySelectorAll('#editCharacterForm input')

    const character = {
        name: inputs[0].value,
        occupation: inputs[1].value,
        weapon: inputs[2].value
    }

    const characterId = inputs[3].value             // Hidden input

    apiHandler
        .editCharacter(characterId, character)
        .then(() => {
            loadCharactersFromAPI()
            document.querySelector('#editCharacterForm').reset()
        })
        .catch(err => console.log(err))
}