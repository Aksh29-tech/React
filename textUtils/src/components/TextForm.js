import React, {useState} from 'react'

export default function TextForm({heading}) {
  const[text, setText] = useState("Enter text here");
//   text = "New Text"; // Wrong way to change the state
//   setText("New Text"); // Correct way to change the state
  const handleUpClick = ()=>{
    // console.log("Uppercase was clicked: " + text);
    let newText = text.toUpperCase();
    setText(newText);
  }
  const handleOnChange = (event) => {
    // console.log("On Change");
    setText(event.target.value);
  }
  return ( 
    <div>
      <h1>{heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange = {handleOnChange} id="myBox" rows="8"></textarea>
        <button className="btn btn-primary my-3" onClick = {handleUpClick}>Convert to Uppercase</button>
      </div>
    </div>
  )
}

 