class CharactersApiHandler {

    constructor() {
        this.axiosApp = axios.create({
            baseURL: 'https://ih-crud-api.herokuapp.com'
        })
    }

    getAllCharacters = () => this.axiosApp.get('/characters')

    createCharacter = info => this.axiosApp.post('/characters', info)

    getOneCharacter = id => this.axiosApp.get(`/characters/${id}`)

    editCharacter = (id, info) => this.axiosApp.put(`/characters/${id}`, info)
}