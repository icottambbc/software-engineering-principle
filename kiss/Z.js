const compose = (...fns) => (x) => fns.reduceRight((y, f) => f(y), x);

const a2r = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
};
const arabic = compose(
  (nn) => nn.reduce((a, b) => a + b, 0),
  (rr) =>
    rr.reduceRight(
      ([r, ...rs], l) =>
        l >= r ? [l].concat(r).concat(rs) : [r - l].concat(rs),
      [0]
    ),
  (aa) => aa.map((a) => a2r[a]),
  (s) => s.split("")
);

console.log(arabic('XXI'));