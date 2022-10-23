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
    return str.slice(1,-1);
  }

// arrays
export function addOnlyPositiveNumbers(arr: number[]): number {
  return arr.reduce((sum, n) => (n > 0 ? sum + n : sum), 0);
}

// convert data types
export function convertNumberToString(num: number): string {
  return num.toString();
}

export const convertBoolToString = (bool: boolean): string => {
  return bool ? "Yes" : "No";
};
