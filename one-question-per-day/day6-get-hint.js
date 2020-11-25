let s = "1807";
let g = "7810";
var getHint = function (secret, guess) {
  let hash = Array(10).fill(0),
    m = 0,
    n = 0;
  console.log(m, n);
  for (let i = 0; i < secret.length; i++) {
    if (secret[i] === guess[i]) m++;
    else {
      if (hash[secret[i]]++ < 0) n++;
      if (hash[guess[i]]-- > 0) n++;
    }
  }

  return `${m}A${n}B`;
};

console.log(getHint(s, g));
