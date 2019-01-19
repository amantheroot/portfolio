import initialState from "../initialState";

export default function pageReducer(state = initialState.page, action) {
  switch (action.type) {
    case "PageTurn":
      return { ...state, page: action.payload };
    case "FirstPageLoaded":
      return { ...state, firstpageloaded: true };
    case "Navigated":
      return { ...state, navigated: true };
    default:
      return state;
  }
}
