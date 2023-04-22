export const initialState = {
    nome: '',
    avatar: '',
    telefone: '',
    favorites: []
}

export const UserReducer = (state, action) => {
    switch(action.type){
        case 'setNome':
            return { ...state, nome: action.payload.nome}
        break
        case 'setAvatar':
            return { ...state, nome: action.payload.avatar}
        break
        default:
            return state

    }

}