// 49. 字母异位词分组
let test = ["eat", "tea", "tan", "ate", "nat", "bat"];

// sort 排序
var groupAnagrams = function (strs, h = {}) {
  for (let i = 0; i < strs.length; i++) {
    let key = Array.from(strs[i]).sort().join();
    h[key] ? h[key].push(strs[i]) : (h[key] = [strs[i]]);
  }
  return Object.values(h);
};

console.log(groupAnagrams(test));
