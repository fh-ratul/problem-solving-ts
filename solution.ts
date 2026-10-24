// STN-7 Problem Solving Assessment
// Run with: node solution.ts

// ---------------------------------------------------------------
// Problem 1: Staircase
// ---------------------------------------------------------------
function staircase(n: number): string {
  if (n <= 0) return "";
  const rows: string[] = [];
  for (let i = 1; i <= n; i++) {
    rows.push(" ".repeat(n - i) + "#".repeat(i));
  }
  return rows.join("\n");
}

// ---------------------------------------------------------------
// Problem 2: Grading Students
// ---------------------------------------------------------------
function gradingStudents(grades: number[]): number[] {
  return grades.map((grade) => {
    if (grade < 38) return grade;
    const nextMultiple = Math.ceil(grade / 5) * 5;
    return nextMultiple - grade < 3 ? nextMultiple : grade;
  });
}

// ---------------------------------------------------------------
// Problem 3: Time Conversion
// ---------------------------------------------------------------
function timeConversion(s: string): string {
  const period = s.slice(-2).toUpperCase();
  const [hh, mm, ss] = s.slice(0, -2).split(":");
  let hours = Number(hh) % 12; // 12 becomes 0
  if (period === "PM") hours += 12;
  return `${String(hours).padStart(2, "0")}:${mm}:${ss}`;
}

// ---------------------------------------------------------------
// Problem 4: String Repeat
// ---------------------------------------------------------------
function repeatStr(n: number, s: string): string {
  if (n <= 0) return "";
  return s.repeat(n);
}

// ---------------------------------------------------------------
// Problem 5: Reversed Strings
// ---------------------------------------------------------------
function solution(str: string): string {
  return Array.from(str).reverse().join("");
}

// ---------------------------------------------------------------
// Problem 6: Sum of Positive
// ---------------------------------------------------------------
function positiveSum(arr: number[]): number {
  let sum = 0;
  for (const value of arr) {
    if (value > 0) sum += value;
  }
  return sum;
}

// ---------------------------------------------------------------
// Problem 7: Grasshopper - Summation
// ---------------------------------------------------------------
function summation(num: number): number {
  if (num <= 0) return 0;
  return (num * (num + 1)) / 2;
}

// ---------------------------------------------------------------
// Problem 8: Convert a Boolean to a String
// ---------------------------------------------------------------
function booleanToString(b: boolean): string {
  return b ? "true" : "false";
}

// ---------------------------------------------------------------
// Problem 9: Fizz Buzz
// ---------------------------------------------------------------
function fizzBuzz(n: number): string[] {
  const result: string[] = [];
  for (let i = 1; i <= n; i++) {
    if (i % 15 === 0) result.push("FizzBuzz");
    else if (i % 3 === 0) result.push("Fizz");
    else if (i % 5 === 0) result.push("Buzz");
    else result.push(String(i));
  }
  return result;
}

// ---------------------------------------------------------------
// Problem 10: Running Sum of 1D Array
// ---------------------------------------------------------------
function runningSum(nums: number[]): number[] {
  const result: number[] = [];
  let total = 0;
  for (const num of nums) {
    total += num;
    result.push(total);
  }
  return result;
}

// ---------------------------------------------------------------
// Problem 11: Richest Customer Wealth
// ---------------------------------------------------------------
function maximumWealth(accounts: number[][]): number {
  let max = 0;
  for (const customer of accounts) {
    let wealth = 0;
    for (const amount of customer) wealth += amount;
    if (wealth > max) max = wealth;
  }
  return max;
}

// ---------------------------------------------------------------
// Problem 12: Remove Duplicates from Sorted Array
// ---------------------------------------------------------------
function removeDuplicates(nums: number[]): number {
  if (nums.length === 0) return 0;
  let k = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[k - 1]) {
      nums[k] = nums[i];
      k++;
    }
  }
  return k;
}

// ---------------------------------------------------------------
// Problem 13: Contains Duplicate
// ---------------------------------------------------------------
function containsDuplicate(nums: number[]): boolean {
  const seen = new Set<number>();
  for (const value of nums) {
    if (seen.has(value)) return true;
    seen.add(value);
  }
  return false;
}

// ---------------------------------------------------------------
// Problem 14: Move Zeroes
// ---------------------------------------------------------------
function moveZeroes(nums: number[]): void {
  let insertPos = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      if (i !== insertPos) {
        nums[insertPos] = nums[i];
        nums[i] = 0;
      }
      insertPos++;
    }
  }
}

// ---------------------------------------------------------------
// Problem 15: Merge Sorted Array
// ---------------------------------------------------------------
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  // Fill nums1 from the back so we don't overwrite values we still need
  let i = m - 1;
  let j = n - 1;
  let write = m + n - 1;

  while (j >= 0) {
    if (i >= 0 && nums1[i] > nums2[j]) {
      nums1[write--] = nums1[i--];
    } else {
      nums1[write--] = nums2[j--];
    }
  }
}

// ---------------------------------------------------------------
// Problem 16: 3Sum
// ---------------------------------------------------------------
function threeSum(nums: number[]): number[][] {
  const sorted = [...nums].sort((a, b) => a - b);
  const result: number[][] = [];

  for (let i = 0; i < sorted.length - 2; i++) {
    if (sorted[i] > 0) break;
    if (i > 0 && sorted[i] === sorted[i - 1]) continue; // skip duplicates

    let left = i + 1;
    let right = sorted.length - 1;
    while (left < right) {
      const sum = sorted[i] + sorted[left] + sorted[right];
      if (sum < 0) {
        left++;
      } else if (sum > 0) {
        right--;
      } else {
        result.push([sorted[i], sorted[left], sorted[right]]);
        while (left < right && sorted[left] === sorted[left + 1]) left++;
        while (left < right && sorted[right] === sorted[right - 1]) right--;
        left++;
        right--;
      }
    }
  }
  return result;
}

// ---------------------------------------------------------------
// Problem 17: Plus One
// ---------------------------------------------------------------
function plusOne(digits: number[]): number[] {
  const result = [...digits];
  for (let i = result.length - 1; i >= 0; i--) {
    if (result[i] < 9) {
      result[i]++;
      return result;
    }
    result[i] = 0;
  }
  // All digits were 9, e.g. 999 -> 1000
  result.unshift(1);
  return result;
}

// ---------------------------------------------------------------
// Problem 18: Reverse String
// ---------------------------------------------------------------
function reverseString(s: string[]): void {
  let left = 0;
  let right = s.length - 1;
  while (left < right) {
    const temp = s[left];
    s[left] = s[right];
    s[right] = temp;
    left++;
    right--;
  }
}

// ---------------------------------------------------------------
// Problem 19: Length of Last Word
// ---------------------------------------------------------------
function lengthOfLastWord(s: string): number {
  let i = s.length - 1;
  while (i >= 0 && s[i] === " ") i--;
  let length = 0;
  while (i >= 0 && s[i] !== " ") {
    length++;
    i--;
  }
  return length;
}

// ---------------------------------------------------------------
// Problem 20: Longest Common Prefix
// ---------------------------------------------------------------
function longestCommonPrefix(strs: string[]): string {
  if (strs.length === 0) return "";
  const first = strs[0];
  for (let i = 0; i < first.length; i++) {
    for (let j = 1; j < strs.length; j++) {
      if (strs[j][i] !== first[i]) {
        return first.slice(0, i);
      }
    }
  }
  return first;
}

// ---------------------------------------------------------------
// Outputs
// ---------------------------------------------------------------
console.log("Problem 1: Staircase");
console.log("For Four:\n",staircase(4));
console.log("For One:\n",staircase(1));

console.log("\nProblem 2: Grading Students");
console.log(gradingStudents([73, 67, 38, 33]));
console.log(gradingStudents([84, 29, 57]));

console.log("\nProblem 3: Time Conversion");
console.log(timeConversion("07:05:45PM"));
console.log(timeConversion("12:00:00AM"));
console.log(timeConversion("12:30:45PM"));

console.log("\nProblem 4: String Repeat");
console.log(repeatStr(3, "ha"));
console.log(repeatStr(0, "hello"));
console.log(repeatStr(4, "a"));

console.log("\nProblem 5: Reversed Strings");
console.log(solution("world"));
console.log(solution("hello"));
console.log(solution(""));

console.log("\nProblem 6: Sum of Positive");
console.log(positiveSum([1, -4, 7, 12]));
console.log(positiveSum([-1, -2, 0, -5]));

console.log("\nProblem 7: Grasshopper - Summation");
console.log(summation(8));
console.log(summation(1));

console.log("\nProblem 8: Convert a Boolean to a String");
console.log(booleanToString(true));
console.log(booleanToString(false));

console.log("\nProblem 9: Fizz Buzz");
console.log(fizzBuzz(5));
console.log(fizzBuzz(15));

console.log("\nProblem 10: Running Sum of 1D Array");
console.log(runningSum([1, 2, 3, 4]));
console.log(runningSum([1, 1, 1, 1, 1]));

console.log("\nProblem 11: Richest Customer Wealth");
console.log(maximumWealth([[1, 2, 3], [3, 2, 1]]));
console.log(maximumWealth([[1, 5], [7, 3], [3, 5]]));

console.log("\nProblem 12: Remove Duplicates from Sorted Array");
const nums12a = [1, 1, 2];
const k12a = removeDuplicates(nums12a);
console.log(k12a, nums12a.slice(0, k12a));
const nums12b = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
const k12b = removeDuplicates(nums12b);
console.log(k12b, nums12b.slice(0, k12b));

console.log("\nProblem 13: Contains Duplicate");
console.log(containsDuplicate([1, 2, 3, 1]));
console.log(containsDuplicate([1, 2, 3, 4]));
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));

console.log("\nProblem 14: Move Zeroes");
const nums14a = [0, 1, 0, 3, 12];
moveZeroes(nums14a);
console.log(nums14a);
const nums14b = [0, 0, 1];
moveZeroes(nums14b);
console.log(nums14b);
const nums14c = [1, 2, 3];
moveZeroes(nums14c);
console.log(nums14c);

console.log("\nProblem 15: Merge Sorted Array");
const nums15a = [1, 2, 3, 0, 0, 0];
merge(nums15a, 3, [2, 5, 6], 3);
console.log(nums15a);
const nums15b = [1];
merge(nums15b, 1, [], 0);
console.log(nums15b);
const nums15c = [0];
merge(nums15c, 0, [1], 1);
console.log(nums15c);

console.log("\nProblem 16: 3Sum");
console.log(threeSum([-1, 0, 1, 2, -1, -4]));
console.log(threeSum([0, 1, 1]));
console.log(threeSum([0, 0, 0]));

console.log("\nProblem 17: Plus One");
console.log(plusOne([1, 2, 9]));
console.log(plusOne([4, 3, 2, 1]));
console.log(plusOne([9, 9, 9]));

console.log("\nProblem 18: Reverse String");
const s18a = ["h", "e", "l", "l", "o"];
reverseString(s18a);
console.log(s18a);
const s18b = ["H", "a", "n", "n", "a", "h"];
reverseString(s18b);
console.log(s18b);

console.log("\nProblem 19: Length of Last Word");
console.log(lengthOfLastWord("Hello World"));
console.log(lengthOfLastWord("   fly me   to   the moon  "));
console.log(lengthOfLastWord("luffy is still joyboy"));

console.log("\nProblem 20: Longest Common Prefix");
console.log(longestCommonPrefix(["flower", "flow", "flight"]));
console.log(longestCommonPrefix(["dog", "racecar", "car"]));
console.log(longestCommonPrefix(["interspecies", "interstellar", "interstate"]));
