// 242. 有效的字母异位词
// func 1
var isAnagram1 = function (s, t) {
  let newStr1 = s.split("").sort().join("");
  let newStr2 = t.split("").sort().join("");
  if (newStr1 === newStr2) {
    return true;
  } else {
    return false;
  }
};

// func 2
var isAnagram2 = function (s, t) {
  return [...s].sort().join("") === [...t].sort().join("");
};

// func 3
var isAnagram3 = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }
  const table = new Array(26).fill(0);
  for (let i = 0; i < s.length; i++) {
    table[s.codePointAt[i] - "a".codePointAt(0)]++;
  }

  for (let i = 0; i < t.length; i++) {
    table[t.codePointAt[i] - "a".codePointAt(0)]--;
    if (table[t.codePointAt[i] - "a".codePointAt(0)] < 0) {
      return false;
    }
  }
  return true;
};
console.log(isAnagram3("anagram", "naagram"));
