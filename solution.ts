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
// Tests
// ---------------------------------------------------------------
let passed = 0;
let failed = 0;

function check(label: string, actual: unknown, expected: unknown): void {
  const a = JSON.stringify(actual);
  const e = JSON.stringify(expected);
  if (a === e) {
    passed++;
  } else {
    failed++;
    console.log(`FAIL ${label}\n  expected: ${e}\n  actual:   ${a}`);
  }
}

// Problem 1
check("P1 n=4", staircase(4), "   #\n  ##\n ###\n####");
check("P1 n=1", staircase(1), "#");
check("P1 n=0", staircase(0), "");

// Problem 2
check("P2 ex1", gradingStudents([73, 67, 38, 33]), [75, 67, 40, 33]);
check("P2 ex2", gradingStudents([84, 29, 57]), [85, 29, 57]);
check("P2 below 38", gradingStudents([37]), [37]);
check("P2 edges", gradingStudents([40, 100, 99]), [40, 100, 100]);
check("P2 empty", gradingStudents([]), []);

// Problem 3
check("P3 ex1", timeConversion("07:05:45PM"), "19:05:45");
check("P3 ex2", timeConversion("12:00:00AM"), "00:00:00");
check("P3 ex3", timeConversion("12:30:45PM"), "12:30:45");
check("P3 AM", timeConversion("01:02:03AM"), "01:02:03");
check("P3 11PM", timeConversion("11:59:59PM"), "23:59:59");

// Problem 4
check("P4 ex1", repeatStr(3, "ha"), "hahaha");
check("P4 ex2", repeatStr(0, "hello"), "");
check("P4 ex3", repeatStr(4, "a"), "aaaa");

// Problem 5
check("P5 ex1", solution("world"), "dlrow");
check("P5 ex2", solution("hello"), "olleh");
check("P5 ex3", solution(""), "");

// Problem 6
check("P6 ex1", positiveSum([1, -4, 7, 12]), 20);
check("P6 ex2", positiveSum([-1, -2, 0, -5]), 0);
check("P6 empty", positiveSum([]), 0);

// Problem 7
check("P7 ex1", summation(8), 36);
check("P7 ex2", summation(1), 1);
check("P7 large", summation(100000), 5000050000);

// Problem 8
check("P8 true", booleanToString(true), "true");
check("P8 false", booleanToString(false), "false");

// Problem 9
check("P9 n=5", fizzBuzz(5), ["1", "2", "Fizz", "4", "Buzz"]);
check("P9 n=15", fizzBuzz(15), ["1", "2", "Fizz", "4", "Buzz", "Fizz", "7", "8", "Fizz", "Buzz", "11", "Fizz", "13", "14", "FizzBuzz"]);
check("P9 n=0", fizzBuzz(0), []);

// Problem 10
check("P10 ex1", runningSum([1, 2, 3, 4]), [1, 3, 6, 10]);
check("P10 ex2", runningSum([1, 1, 1, 1, 1]), [1, 2, 3, 4, 5]);
check("P10 negatives", runningSum([3, -1, -2, 5]), [3, 2, 0, 5]);

// Problem 11
check("P11 ex1", maximumWealth([[1, 2, 3], [3, 2, 1]]), 6);
check("P11 ex2", maximumWealth([[1, 5], [7, 3], [3, 5]]), 10);

// Problem 12
const p12a = [1, 1, 2];
check("P12 ex1 k", removeDuplicates(p12a), 2);
check("P12 ex1 array", p12a.slice(0, 2), [1, 2]);
const p12b = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
check("P12 ex2 k", removeDuplicates(p12b), 5);
check("P12 ex2 array", p12b.slice(0, 5), [0, 1, 2, 3, 4]);
check("P12 empty", removeDuplicates([]), 0);

// Problem 13
check("P13 ex1", containsDuplicate([1, 2, 3, 1]), true);
check("P13 ex2", containsDuplicate([1, 2, 3, 4]), false);
check("P13 ex3", containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]), true);

// Problem 14
const p14a = [0, 1, 0, 3, 12];
moveZeroes(p14a);
check("P14 ex1", p14a, [1, 3, 12, 0, 0]);
const p14b = [0, 0, 1];
moveZeroes(p14b);
check("P14 ex2", p14b, [1, 0, 0]);
const p14c = [1, 2, 3];
moveZeroes(p14c);
check("P14 ex3", p14c, [1, 2, 3]);

// Problem 15
const p15a = [1, 2, 3, 0, 0, 0];
merge(p15a, 3, [2, 5, 6], 3);
check("P15 ex1", p15a, [1, 2, 2, 3, 5, 6]);
const p15b = [1];
merge(p15b, 1, [], 0);
check("P15 ex2", p15b, [1]);
const p15c = [0];
merge(p15c, 0, [1], 1);
check("P15 ex3", p15c, [1]);
const p15d = [4, 5, 6, 0, 0, 0];
merge(p15d, 3, [1, 2, 3], 3);
check("P15 nums2 smaller", p15d, [1, 2, 3, 4, 5, 6]);

// Problem 16
check("P16 ex1", threeSum([-1, 0, 1, 2, -1, -4]), [[-1, -1, 2], [-1, 0, 1]]);
check("P16 ex2", threeSum([0, 1, 1]), []);
check("P16 ex3", threeSum([0, 0, 0]), [[0, 0, 0]]);
check("P16 many zeros", threeSum([0, 0, 0, 0]), [[0, 0, 0]]);

// Problem 17
check("P17 ex1", plusOne([1, 2, 9]), [1, 3, 0]);
check("P17 ex2", plusOne([4, 3, 2, 1]), [4, 3, 2, 2]);
check("P17 ex3", plusOne([9, 9, 9]), [1, 0, 0, 0]);
check("P17 zero", plusOne([0]), [1]);

// Problem 18
const p18a = ["h", "e", "l", "l", "o"];
reverseString(p18a);
check("P18 ex1", p18a, ["o", "l", "l", "e", "h"]);
const p18b = ["H", "a", "n", "n", "a", "h"];
reverseString(p18b);
check("P18 ex2", p18b, ["h", "a", "n", "n", "a", "H"]);

// Problem 19
check("P19 ex1", lengthOfLastWord("Hello World"), 5);
check("P19 ex2", lengthOfLastWord("   fly me   to   the moon  "), 4);
check("P19 ex3", lengthOfLastWord("luffy is still joyboy"), 6);
check("P19 only spaces", lengthOfLastWord("   "), 0);

// Problem 20
check("P20 ex1", longestCommonPrefix(["flower", "flow", "flight"]), "fl");
check("P20 ex2", longestCommonPrefix(["dog", "racecar", "car"]), "");
// The assignment says "inter", but all three words also share the next "s"
check("P20 ex3", longestCommonPrefix(["interspecies", "interstellar", "interstate"]), "inters");
check("P20 single", longestCommonPrefix(["alone"]), "alone");
check("P20 has empty", longestCommonPrefix(["abc", "", "abd"]), "");

console.log(`\n${passed} passed, ${failed} failed`);
