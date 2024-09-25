import { saveAs } from "file-saver";

export const generateNumbers = (m, a, c, x0, count) => {
  let x = x0;
  const generatedNumbers = [];

  for (let i = 0; i < count; i++) {
    x = (a * x + c) % m;
    generatedNumbers.push(x);
  }

  return generatedNumbers;
};

export const calculatePeriod = (numbers) => {
  const seen = new Map();
  for (let i = 0; i < numbers.length; i++) {
    if (seen.has(numbers[i])) {
      return i - seen.get(numbers[i]);
    }
    seen.set(numbers[i], i);
  }
  return numbers.length;
};

export const saveToFile = (data) => {
  const blob = new Blob([data.join(", ")], {
    type: "text/plain;charset=utf-8",
  });
  saveAs(blob, "generated_numbers.txt");
};
