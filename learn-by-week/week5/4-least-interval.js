/**
 * @url https://leetcode-cn.com/problems/task-scheduler/
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
const _ = require("lodash");

var leastInterval = function (tasks, n) {
    const freq = _.countBy(tasks);
    const maxExec = Math.max(...Object.values(freq));
    let maxCount = 0;
    Object.values(freq).forEach(v => {
        if(v === maxExec) maxCount += 1
    });
    return Math.max((maxExec - 1) * (n + 1) + maxCount, tasks.length)
};

leastInterval(["A", "A", "A", "B", "B", "B", "B", "C", "C", "C", "C"], 2);
