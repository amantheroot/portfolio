import initialState from "../initialState";

export default function pageReducer(state = initialState.about, action) {
  switch (action.type) {
    case "BrainLoaded":
      return { ...state, brainloaded: true };
    case "SetSize":
      return { ...state, size: action.payload };
    default:
      return state;
  }
}
