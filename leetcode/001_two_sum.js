/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // Hash map allows us to do one pass O(n)
    const hm = {};

    for(let i = 0; i < nums.length; i++) {
        // is the remainder in the object
        if((target - nums[i]) in hm) {
            return [hm[target - nums[i]], i];
        }

        // sets value to index 
        hm[nums[i]] = i;
    }

    return [];
};

console.log(twoSum([2, 7, 5, 11, 15], 9))