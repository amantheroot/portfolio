import InitialState from "../initialState";

export default function reducer(state = { ...InitialState.form }, action) {
  switch (action.type) {
    case "toggleGamePlay":
      return { ...state, game: !state.game };
    case "toggleBarReady":
      return { ...state, barReady: !state.barReady };
    case "ChangeVel":
      return { ...state, ballvel: action.payload };
    case "ChangeYVel":
      return { ...state, ballyvel: action.payload };
    case "ChangeXVel":
      return { ...state, ballxvel: action.payload };
    case "ChangeLife":
      return { ...state, lives: action.payload };
    case "ChangeScore":
      return { ...state, score: action.payload };
    case "BrickHit":
      let bricks = [...state.bricks];
      bricks[action.payload].alive = false;
      return { ...state, bricks };
    case "ResetBricks":
      let Bricks = Array.apply(null, Array(14 * 6)).map((v, id) => {
        return { id, alive: true };
      });
      return { ...state, bricks: Bricks };
    case "SetMessage":
      return { ...state, msg: action.payload };
    case "ToggleInfoProvided":
      return { ...state, infoprovided: action.payload };
    case "ToggleAudio":
      return { ...state, audio: !state.audio };
    case "ResetStore":
      return InitialState.form;
    default:
      return state;
  }
}
