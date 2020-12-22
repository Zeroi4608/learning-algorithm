/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
// var getHint = function(secret, guess) {

const { has } = require("lodash");

// };

var getHint = function (secret, guess) {
  let hash = Array(10).fill(0),
    m = 0,
    n = 0;
  for (let i = 0; i < secret.length; i++) {
    if (secret[i] === guess[i]) m++;
    else {
      if (hash[secret[i]]++ < 0) n++;
      if (hash[guess[i]]-- > 0) n++;
    }
  }
  return `${m}A${n}B`;
};

var getHint = function (secret, guess) {
  let hash = Array(10).fill(0),
    m = 0,
    n = 0;
  for (let i = 0; i < secret.length; i++) {
    if (secret[i] === guess[i]) m++;
    else {
      if (hash[secret[i]]++ < 0) n++;
      if (hash[guess[i]]-- > 0) n++;
    }
  }
  return `${m}A${n}B`;
};

console.log(getHint("1807", "7810"));
