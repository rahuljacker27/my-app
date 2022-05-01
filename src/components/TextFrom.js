// import { clear } from '@testing-library/user-event/dist/clear';
import React, { useState } from 'react'

export default function TextFrom(props) {
  const handleUpClick = ()=> {
    // console.log("UpperCas was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted yo Upper Case", "success");
  }
  const handleDownClick = ()=> {
    // console.log("LowerCas was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted yo Lower Case", "success");
  }
  // const handleCapClick = ()=> {
  //   // console.log("LowerCas was clicked" + text);
  //   let newText = text.split(" ");
  //   for (let x in newText) {
  //     x[0] = x[0].toUpperCase();
  //   }
  //   console.log(newText);
  //   setText(newText);
  // }
  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
    props.showAlert("I am speaking", "success");
  }
  const handleClrClick = ()=> {
    // console.log("LowerCas was clicked" + text);
    let newText = "";
    setText(newText);
  }
  const handleCopy = ()=> {
    var txt = document.getElementById('myBox');
    txt.select();
    navigator.clipboard.writeText(txt.value);
  }
  const handleExtraSpace = ()=> {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  }

  const handleOnchange = (event)=> {
    setText(event.target.value);
    // setText("");
  }


  const [text, setText] = useState('');
  // text = "new text";// wrong way to change text
  // setText("new Text");//right way to change text

  return (
    <>
    <div className='container' style= {{color: props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            
            <textarea className="form-control" value={text} style= {{backgroundColor: props.mode==='dark'?'grey':'white' , color: props.mode==='dark'?'white':'black' }} onChange={handleOnchange} id="myBox" rows="10"></textarea>
        </div>
        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
          <button className="btn btn-primary" onClick={handleUpClick}>Convert to upper case</button>
          <button className="btn btn-success" onClick={handleDownClick}>Convert to Lower case</button>
          <button className="btn btn-success" onClick={speak}>Capitalise Case</button>
          <button className="btn btn-danger" onClick={handleCopy}>Copy Text</button>
          <button className="btn btn-success" onClick={handleExtraSpace}>Handle Extra Space</button>
          <button className="btn btn-danger" onClick={handleClrClick}>Clear Text</button>
        </div>
    </div>
    <div className="container my-3" style= {{color: props.mode==='dark'?'white':'black'}}>
      <h1>Your Text Summary</h1>
      <p>{text.split(" ").length} words , {text.length} characters</p>
      <p>time to read this para is {text.split(" ").length*(0.008)}</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter your text here"}</p>
    </div>
    </>
  )
}
