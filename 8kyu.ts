// numbers
export function multiplyNumbers(a: number, b: number): number {
  return a + b;
}

export class Kata {
  static makeNumbertoOpposite(n: number) {
    return -n;
  }
}

export const makeNumberNegative = (num: number): number => -Math.abs(num);

// strings
export function makeUpperCase(str: string): string {
  return str.toUpperCase();
}

export function writeNumberToEvenOrOdd(n: number): string {
  return n % 2 == 0 ? "Even" : "Odd";
}

export function reverseString(str: string): string {
  return str.split("").reverse().join("");
}

export function repeatString(n: number, s: String): String {
  return s.repeat(n);
}

export function removeFirstAndLastCharacterFromString(str: string): string {
  return str.slice(1, -1);
}

export function convertNameToIntials(name: string): string {
  return name
    .toUpperCase()
    .split(" ")
    .map((word) => word[0])
    .join(".");
}

// arrays
export function findMinimumNumber(args: number[]): number {
  return Math.min(...args);
}

export function doubleEachNumberInArray(x: number[]): number[] {
  return x.map((number) => number * 2);
}

export function addOnlyPositiveNumbers(arr: number[]): number {
  return arr.reduce((sum, n) => (n > 0 ? sum + n : sum), 0);
}

export function sumSquareOfEachNumber(numbers: number[]): number {
  return numbers.reduce((sum, current) => sum + current * current, 0);
}

export function findWordIndexInArray(haystack: any[]): string {
  let index = haystack.indexOf("needle");
  return `found the needle at position ${index}`;
}

// convert data types
export function convertNumberToString(num: number): string {
  return num.toString();
}

export function convertStringToNumber(str: string): number {
  return Number(str);
}

export const convertBoolToYesOrNo = (bool: boolean): string => {
  return bool ? "Yes" : "No";
};

export const booleanToString = (boolean: boolean): string => {
  return boolean.toString();
};
