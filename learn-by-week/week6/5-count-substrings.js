/**
 * @url https://leetcode-cn.com/problems/palindromic-substrings/
 * @param {string} s
 * @return {number}
 */
// 暴力法
const isPalindrome = (s) => {
    let i = 0;
    let j = s.length - 1;
    while (i < j) {
        if (s[i] !== s[j]) return false;
        i++;
        j--;
    }
    return true;
}
var countSubstrings = function(s) {
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        for (let j = i; j < s.length; j++) {
            if(isPalindrome(s.substing(i, j + 1))) {
                count++;
            }
        }
    }
    return count;
};