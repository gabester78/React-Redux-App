export const initialState = {
  quote: "",
  name: "",
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_QUOTE_SUCCESS":
      return {
        ...state,
        quote: action.payload,
      };
    case "FETCH_NAME_SUCCESS":
      return {
        ...state,
        name: action.payload,
      };
    default:
      return state;
  }
};
