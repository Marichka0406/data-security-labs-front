import { useState } from "react";
import { TextField, Button, Typography, Box } from "@mui/material";
import { saveToFile, generateNumbers, calculatePeriod, validateInputs } from "../../utils/numbersGeneratorFunctions";
import { styles } from "./NumbersGeneratorForm.styles";
import { toast } from "react-toastify";

const NumbersGeneratorForm = () => {
  const [m, setM] = useState(0);
  const [a, setA] = useState(0);
  const [c, setC] = useState(0);
  const [x0, setX0] = useState(0);
  const [count, setCount] = useState(0);
  const [results, setResults] = useState([]);
  const [period, setPeriod] = useState(0);

  const handleGenerate = () => {
    setResults([]);

    const mValue = parseInt(m);
    const aValue = parseInt(a);
    const cValue = parseInt(c);
    const x0Value = parseInt(x0);
    const countValue = parseInt(count);

    if (!validateInputs(mValue, aValue, cValue, x0Value)) {
      return;  
    }

    const generatedNumbers = generateNumbers(mValue, aValue, cValue, x0Value, countValue);
    setResults(generatedNumbers);

    const calculatedPeriod = calculatePeriod(generatedNumbers);
    setPeriod(calculatedPeriod);

    toast.success("Numbers generated successfully!");
  };

  const handleSave = () => {
    if (results.length > 0) {
      saveToFile(results);
      toast.success("Results saved to file successfully!");
    } else {
      toast.error("No results to save.");
    }
  };

  return (
    <Box sx={styles.formWrapper}>
      <Box sx={styles.formContainer}>
        <Typography variant="h4" sx={styles.title}>Random Numbers Generator</Typography>
        <TextField
          label="Modulus (m)"
          variant="outlined"
          type="number"
          value={m}
          onChange={(e) => setM(e.target.value)}
          fullWidth
          margin="normal"
          sx={styles.input}
        />
        <TextField
          label="Multiplier (a)"
          variant="outlined"
          type="number"
          value={a}
          onChange={(e) => setA(e.target.value)}
          fullWidth
          margin="normal"
          sx={styles.input}
        />
        <TextField
          label="Increment (c)"
          variant="outlined"
          type="number"
          value={c}
          onChange={(e) => setC(e.target.value)}
          fullWidth
          margin="normal"
          sx={styles.input}
        />
        <TextField
          label="Initial Value (X0)"
          variant="outlined"
          type="number"
          value={x0}
          onChange={(e) => setX0(e.target.value)}
          fullWidth
          margin="normal"
          sx={styles.input}
        />
        <TextField
          label="Number of Values"
          variant="outlined"
          type="number"
          value={count}
          onChange={(e) => setCount(e.target.value)}
          fullWidth
          margin="normal"
          sx={styles.input}
        />
        <Typography variant="h6" sx={styles.subtitle}>Results:</Typography>
        <TextField
          label="Generated Numbers"
          variant="outlined"
          value={results.join(", ")}
          fullWidth
          margin="normal"
          InputProps={{ readOnly: true }}
          multiline
          rows={4}
          sx={styles.textField}
        />
        <Typography variant="h6" sx={styles.subtitle}>Period: {period}</Typography>
        <Box sx={styles.buttons}>
          <Button variant="contained" color="primary" onClick={handleGenerate} sx={styles.button}>Generate</Button>
          <Button variant="outlined" color="secondary" onClick={handleSave} sx={{ ...styles.button, marginLeft: "10px" }}>Save to File</Button>
        </Box>
      </Box>
    </Box>
  );
};

export default NumbersGeneratorForm;
