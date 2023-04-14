// import { getValue } from '@testing-library/user-event/dist/utils'
import React, { useState } from "react";

export default function Textarea(props) {



  const handlechange = (event) => {
    setText(event.target.value);
  };

  const click = () => {
    const newText = text.toUpperCase();

    setText(newText);
    props.oncl("Converted to Uppwecase", "success");
  };

  const lowerclick = () => {
    const newText = text.toLowerCase();

    setText(newText);
    props.oncl("Converted to lowercase", "success");
  };

  const cleartext = () => {
    const newText = " ";

    setText(newText);
    props.oncl("Text has been cleared", "danger");
  };

  const remove = () => {
    const newText = text.split(/[ ]+/);

    setText(newText.join(" "));
    props.oncl("Extra spaces have been removed", "success");
  };

  const copyText = () => {
    var text = document.getElementById("myBox");
    text.select();

    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges();
    props.oncl("Your text is copied", "success");
  };

  const [text, setText] = useState("");

  // const [bdia, bhotBdia] = useState({
  //   color: "black",
  //   backgroundColor: "white",
  // });

  // const changeStatenew = () => {
  //   const newfu = {
  //     color: "yellow",
  //     backgroundColor: "blue",
  //   };

  //   const newState = newfu;
  //   bhotBdia(newState);
  //   props.oncl("State has been changed", "success");
  // };

  return (
    <>
    
    <div className="container" style={{color:props.mode==="dark"?"white":"black"}}>
      <h1>{props.heading } </h1>

      <div className="mb-3">

      <textarea
        className="form-control"
        value={text}
       
        // changeStatenew={changeStatenew}
        onChange={handlechange}

        style={{backgroundColor:props.mode==="dark"?"#042743":"white",color:props.mode==="dark"?"white":"black"}}
        id="myBox"
        rows="10"
      ></textarea>
      </div>

      <button disabled={text.length === 0} className="btn btn-outline-primary mx-2 my-2" onClick={click}>
        Uppercase{" "}
      </button>
      <button disabled={text.length === 0} className="btn btn-outline-success mx-2 my-2" onClick={lowerclick}>
        lowercase{" "}
      </button>
      <button disabled={text.length === 0} className="btn btn-outline-danger mx-2 my-2" onClick={cleartext}>
        clear text{" "}
      </button>
      <button disabled={text.length === 0} className="btn btn-outline-secondary mx-2 my-2" onClick={remove}>
        removeSpaces{" "}
      </button>
      <button disabled={text.length === 0} className="btn btn-outline-success mx-2 my-2" onClick={copyText}>
        copyText{" "}
      </button>
      {/* <button disabled={text.length === 0} className="btn btn-outline-success mx-2 my-2" onClick={changeStatenew}>
        
        Change{" "}
      </button> */}
      <div
        className="container my-3"
        style={{color:props.mode==="dark"?"white":"black"}}
      >
        <h3 className="hover">Analysis</h3>
        <strong>
          The textarea has {text.split(" ").filter((element) => element.length !== 0).length} words and {text.length} char{" "}
        </strong>

        <div className="my-2">

          <b>{0.008 * text.split(" ").filter((element) => element.length !== 0).length} Minutes will take</b>
        </div>

        <h2>PREVIEW </h2>
        <p>{text.length > 0 ? text : "Noting to preview here"}</p>
      </div>
      </div>
    

    </>
  );
}
