import "./App.css";
import NumbersGeneratorForm from "./components/NumbersGeneratorForm/NumbersGeneratorForm";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <>
      <NumbersGeneratorForm />
      <ToastContainer />
    </>
  );
};

export default App;
