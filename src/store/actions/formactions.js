export function toggleGameplay() {
  return {
    type: "toggleGamePlay",
    payload: null
  };
}
export function toggleBarReady() {
  return {
    type: "toggleBarReady",
    payload: null
  };
}
export function ChangeVel(newvel) {
  return {
    type: "ChangeVel",
    payload: newvel
  };
}
export function ChangeYVel(newvel) {
  return {
    type: "ChangeYVel",
    payload: newvel
  };
}
export function ChangeXVel(newvel) {
  return {
    type: "ChangeXVel",
    payload: newvel
  };
}
export function ChangeLife(life) {
  return {
    type: "ChangeLife",
    payload: life
  };
}
export function BrickHit(id) {
  return {
    type: "BrickHit",
    payload: id
  };
}
export function ResetBricks() {
  return {
    type: "ResetBricks",
    payload: null
  };
}
export function SetMessage(msg) {
  return {
    type: "SetMessage",
    payload: msg
  };
}
export function ChangeScore(score) {
  return {
    type: "ChangeScore",
    payload: score
  };
}
export function ToggleInfoProvided(infoprovided) {
  return {
    type: "ToggleInfoProvided",
    payload: infoprovided
  };
}
export function ResetStore() {
  return {
    type: "ResetStore",
    payload: null
  };
}
export function ToggleAudio() {
  return {
    type: "ToggleAudio",
    payload: null
  };
}
