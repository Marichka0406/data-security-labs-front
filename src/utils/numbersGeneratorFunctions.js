import { saveAs } from "file-saver";
import { toast } from "react-toastify";

export const validateInputs = (m, a, c, x0) => {
  if (m <= 0) {
    toast.error("Modulus (m) must be greater than 0.");
    return false;
  }
  if (a < 0 || a >= m) {
    toast.error("Multiplier (a) must be between 0 and less than m.");
    return false;
  }
  if (c < 0 || c >= m) {
    toast.error("Increment (c) must be between 0 and less than m.");
    return false;
  }
  if (x0 < 0 || x0 >= m) {
    toast.error("Initial Value (X0) must be between 0 and less than m.");
    return false;
  }
  return true;
};

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
