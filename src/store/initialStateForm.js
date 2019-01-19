export default {
  game: false,
  barReady: false,
  bricks: Array.apply(null, Array(14 * 6)).map((v, id) => {
    return { id, alive: true };
  }),
  ballvel: 6,
  ballxvel: Math.random() < 0.5 ? -1 : 1,
  ballyvel: 1,
  lives: 3,
  msg: "",
  score: 0,
  infoprovided: false,
  audio: true
};
