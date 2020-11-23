const initialState = {
  usuario: null,
  disciplina: null,
  atividade: null,
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case "fazerLogin":
      return {
        ...state,
        usuario: action.payload,
      };
      break;

    default:
      break;
  }
}
