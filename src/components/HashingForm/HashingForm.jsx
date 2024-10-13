import { useState } from "react";
import {
  TextField,
  Button,
  Typography,
  Box,
  CircularProgress,
  Backdrop,
} from "@mui/material";
import { toast } from "react-toastify";
import { hashString, hashFile, verifyFile } from "../../services/md5Service"; // Adjust the import path as necessary
import { styles } from "../NumbersGeneratorForm/NumbersGeneratorForm.styles";

const HashingForm = () => {
  const [inputString, setInputString] = useState("");
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState(""); // State to store the file name
  const [expectedHash, setExpectedHash] = useState("");
  const [hashOutput, setHashOutput] = useState(""); // Combined output state
  const [verificationResult, setVerificationResult] = useState(null);
  const [loading, setLoading] = useState(false); // State for loading

  const handleHashString = async () => {
    setHashOutput(""); // Clear previous output
    setLoading(true); // Start loading
    try {
      const hash = await hashString(inputString);
      setHashOutput(hash);
      toast.success("String hashed successfully!");
    } catch (error) {
      toast.error("Error hashing string.");
    } finally {
      setLoading(false); // Stop loading
    }
  };

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
    setFileName(selectedFile.name); // Update file name state
  };

  const handleHashFile = async () => {
    if (!file) {
      toast.error("Please select a file to hash.");
      return;
    }

    setHashOutput(""); // Clear previous output
    setLoading(true); // Start loading
    try {
      const hash = await hashFile(file);
      setHashOutput(hash);
      toast.success("File hashed successfully!");
    } catch (error) {
      toast.error("Error hashing file.");
    } finally {
      setLoading(false); // Stop loading
    }
  };

  const handleVerifyFile = async () => {
    if (!file || !expectedHash) {
      toast.error("Please select a file and provide an expected hash.");
      return;
    }

    setLoading(true); // Start loading
    try {
      const isValid = await verifyFile(file, expectedHash);
      setVerificationResult(isValid);
      toast.success("File verification completed.");
    } catch (error) {
      toast.error("Error verifying file.");
    } finally {
      setLoading(false); // Stop loading
    }
  };

  const handleDownloadHash = () => {
    const blob = new Blob([hashOutput], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "hash.txt"; // Name of the downloaded file
    a.click();
    URL.revokeObjectURL(url);
    toast.success("Hash downloaded successfully!");
  };

  return (
    <Box sx={styles.formWrapper}>
      <Box sx={styles.formContainer}>
        <Typography variant="h4" sx={styles.title} gutterBottom>
          MD5 Hashing
        </Typography>

        <TextField
          label="String to Hash"
          variant="outlined"
          value={inputString}
          onChange={(e) => setInputString(e.target.value)}
          sx={styles.textField} // Apply the text field styles
          margin="normal"
        />
        <Button
          variant="contained"
          onClick={handleHashString}
          sx={styles.button}
          disabled={loading} // Disable button when loading
        >
          Hash String
        </Button>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          <input
            accept="*"
            type="file"
            id="file-input"
            onChange={handleFileChange}
            style={{ display: "none" }} // Hide the default file input
          />
          <label htmlFor="file-input" style={{ flexGrow: 1 }}>
            <Button
              variant="contained"
              component="span"
              sx={styles.button} // Make the button take full width
            >
              Select File
            </Button>
          </label>
          {fileName && (
            <Typography variant="body1" sx={{ marginLeft: 2, flexGrow: 1 }}>
              {fileName} {/* Display the selected file name */}
            </Typography>
          )}
        </Box>

        <Button
          variant="contained"
          onClick={handleHashFile}
          sx={styles.button}
          disabled={loading} // Disable button when loading
        >
          Hash File
        </Button>

        <TextField
          label="Expected Hash"
          variant="outlined"
          value={expectedHash}
          onChange={(e) => setExpectedHash(e.target.value)}
          sx={styles.textField} // Apply the text field styles
          margin="normal"
        />
        <Button
          variant="contained"
          onClick={handleVerifyFile}
          sx={styles.button}
          disabled={loading} // Disable button when loading
        >
          Verify File
        </Button>

        <Typography variant="h6">Generated Hash: {hashOutput}</Typography>

        {hashOutput && (
          <Button
            variant="outlined"
            onClick={handleDownloadHash}
            sx={styles.button}
          >
            Download Hash
          </Button>
        )}

        {verificationResult !== null && (
          <Typography variant="h6">
            Verification Result: {verificationResult ? "Valid" : "Invalid"}
          </Typography>
        )}

        {/* Backdrop with CircularProgress for loading */}
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={loading}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      </Box>
    </Box>
  );
};

export default HashingForm;
