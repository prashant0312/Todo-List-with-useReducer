const todoReducer = (state, action) => {
  switch (action.type) {
    case "Add":
      return [...state, { title: action.payload.title, id: action.payload.id }];

    case "Delete":
      return state.filter((e) => {
        return e.id !== action.payload.id;
      });

    default:
      return state;
  }
};

export { todoReducer };
