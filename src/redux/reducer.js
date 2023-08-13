const intialState = {
  books: [],
  Fav: [],
};
const reducer = (state = intialState, action) => {
  console.log(action.type);
  switch (action.type) {
    case 'FETCH_BOOKS':
      return {
        ...state,
        books: action.payload,
      };
    case 'ADD_TO_FAV':
      return {
        ...state,
        Fav: [...state.Fav,action.payload],
      };
    case 'REMOVE_FROM_FAV':
      return {
        ...state,
        Fav: state.Fav.filter(item => {
          return item.title !== action.payload;
        }),
      };
    default:
      return state;
  }
};
export default reducer;
