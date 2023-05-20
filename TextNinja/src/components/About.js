import React, { useState } from "react";

export default function About(props) {
  // let [mystyle, setStyle] = useState({
  //   color: "white",
  //   backgroundColor: "black",
  // });

 

  let mystyle= {

    color: props.mode==="dark"?"white": "#042743",
    backgroundColor: props.mode==="dark"? "rgb(36 74 104)": "white",
    border: "1px solid", 
    borderColor: props.mode==="dark"? 
    "white":"rgb(36 74 104)"
  };

  return (
    <div className="container">
      <h1 className="my-3" style={{color: props.mode==="dark"?"white": "#042743"}}>
      About Us</h1>

      {/* const [about, setabout]= useState("this is about") */}

      <div>
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button"
                style={mystyle}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                <strong>Analyze your text</strong>
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              style={mystyle}
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
               TextNinja gives you a way to analyze your text quickly and efficiently.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button collapsed"
                style={mystyle}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                <strong>Free to use</strong>
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              style={mystyle}
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
               TextNinja is a free character counter tool that provide instant chracter count & word count statistics for a given text. TextNinja reports the number of words and character. Thus it is suitable for writing text with word/character limit.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button
                className="accordion-button collapsed"
                style={mystyle}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                <strong>Browser compatible</strong>
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              style={mystyle}
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
               This word counter software works in any web browser such as Chrome, Firefox, Safari, Internet Explorer, Opera. It suits to count character in facebook, blogs, books, exel document, pdf document, essays, etc.
              </div>
            </div>
          </div>
        </div>
      </div>
     
    </div>
  );
}
