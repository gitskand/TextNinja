import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Textarea from "./components/Textarea";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from "./components/About";

function App() {


  const [mode, setMode] = useState("light");

  const [mode1, setMode1] = useState("dark");

  const [alert, setAlert] = useState(null);

  const oncl = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  const Toggle = () => {
    if (mode === "light") {
      setMode("dark");

      document.body.style.backgroundColor = "#042743";
      oncl("Dark mode has been enabled", "Success");
      document.title = "Dark Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      oncl("Light mode has been eneabled", "Success");
      document.title = "Light Mode";
    }
  };

  const Toggle2 = () => {
    if (mode1 === "blue") {
      setMode1("dark");

      document.body.style.backgroundColor = "green";
      oncl("Dark mode has been enabled", "Success");
    } else {
      setMode1("dark");
      document.body.style.backgroundColor = "blue";
      oncl("Light mode has been eneabled", "Success");
    }
  };

  return (
    <>



        <Router>
          
      

          <Navbar title="TextNinja"  mode={mode} Toggle={Toggle} Toggle2={Toggle2} />
          

          <Alert alert={alert} />
          <Routes>
            <Route exact path="about/" element={<About mode={mode}/>}> </Route>

            <Route exact path="/" element={<div className="container"> <Textarea  oncl={oncl} heading="Enter Text below" mode={mode} /></div>}></Route>

          </Routes>



        </Router>



    </>

  );
}

export default App;










