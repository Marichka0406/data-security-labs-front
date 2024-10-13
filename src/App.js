import "./App.css";
import NumbersGeneratorForm from "./components/NumbersGeneratorForm/NumbersGeneratorForm";
import HashingForm from "./components/HashingForm/HashingForm";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <>
      <HashingForm />
      { /*<NumbersGeneratorForm />*/}
      <ToastContainer />
    </>
  );
};

export default App;
