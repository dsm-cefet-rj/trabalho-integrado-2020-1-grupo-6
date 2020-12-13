export const initialState = {
  usuario: JSON.parse(localStorage.getItem("USUARIO")),
  disciplina: null,
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case "fazerLogin":
      localStorage.setItem("USUARIO", JSON.stringify(action.payload));
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
    case "atualizarUsuario":
      return {
        ...state,
        usuario: action.payload,
      };
      break;

    default:
      return state;
      break;
  }
}
