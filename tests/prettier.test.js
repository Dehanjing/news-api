let a = "hai";
const b = "" || a;

let c = {
  s: a,
  b: b,
  d: {
    a,
    b,
  },
  c: "abc",
};
