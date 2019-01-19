export function PageTurn(page) {
  return {
    type: "PageTurn",
    payload: page
  };
}
export function FirstPageLoaded() {
  return {
    type: "FirstPageLoaded",
    payload: null
  };
}
export function Navigated() {
  return {
    type: "Navigated",
    payload: null
  };
}
