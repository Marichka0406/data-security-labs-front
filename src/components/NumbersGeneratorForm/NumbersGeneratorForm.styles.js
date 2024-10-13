export const styles = {
  formWrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(to right, #0D47A1, #1976D2, #64B5F6)",
    minHeight: "100vh",
    paddingBottom: "0px", 
    boxSizing: "border-box", 
  },
  formContainer: {
    p: "20px",
    maxWidth: "550px",
    m: "auto",
    mt: "8px",
    mb: "8px",
    backgroundColor: "#BBDEFB",
    boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.7)",
    borderRadius: "14px",
  },
  title: {
    textAlign: "center",
    color: "#1565C0",
    fontFamily: "Montserrat",
    fontWeight: "bold",
    fontSize: "40px",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.1)",
    background: "linear-gradient(to right, #0D47A1, #1976D2, #64B5F6)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
  subtitle: {
    textAlign: "center",
    fontFamily: "Montserrat",
    fontSize: "20px",
    color: "#1565C0",
    fontWeight: "bold",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.1)",
    background: "linear-gradient(to right, #0D47A1, #1976D2, #64B5F6)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
  input: {
    width: "100%",
    backgroundColor: "#E3F2FD",
    "& label": {
      color: "#0D47A1",
      fontSize: "17px",
      fontWeight: "600",
    },
    "& label.Mui-focused": {
      color: "#1976D2",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#0D47A1",
        borderWidth: "3px",
        borderStyle: "solid",
      },
      "&:hover fieldset": {
        borderColor: "#0D47A1",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#1976D2",
      },
      "& .MuiInputBase-input": {
        fontFamily: "Montserrat",
        fontSize: "18px",
        fontWeight: "500",
        padding: "10px 14px",
      },
      "& .MuiIconButton-root": {
        color: "#0D47A1",
      },
      "&.Mui-focused .MuiIconButton-root": {
        color: "#1976D2",
      },
    },
  },
  textField: {
    width: "100%",
    backgroundColor: "#E3F2FD",
    "& label": {
      color: "#0D47A1",
      fontSize: "17px",
      fontWeight: "600",
    },
    "& label.Mui-focused": {
      color: "#1976D2",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#0D47A1",
        borderWidth: "3px",
        borderStyle: "solid",
      },
      "&:hover fieldset": {
        borderColor: "#0D47A1",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#1976D2",
      },
      "& .MuiInputBase-input": {
        fontFamily: "Montserrat",
        fontSize: "18px",
        fontWeight: "500",
      },
      "& .MuiIconButton-root": {
        color: "#0D47A1",
      },
      "&.Mui-focused .MuiIconButton-root": {
        color: "#1976D2",
      },
    },
  },
  buttons: {
    display: "flex",
  },
  button: {
    mt: "10px",
    mb: "10px",
    width: "100%",
    background: "linear-gradient(to right, #0D47A1, #1976D2, #64B5F6)", // Blue gradient
    color: "#fff",
    "&:hover": {
      background: "linear-gradient(to right, #002171, #1565C0, #0D47A1)", // Darker blue gradient on hover
    },
    borderRadius: "20px",
    fontFamily: "Montserrat",
    fontWeight: "500",
    fontSize: "18px",
  },
};
