const initialState = {
  usuario: null,
  disciplina: null,
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case "fazerLogin":
      return {
        ...state,
        usuario: action.payload,
      };
      break;
    case "criarAtividade":
      return {
        ...state,
        disciplina: action.payload,
      };
      break;

    default:
      break;
  }
}
