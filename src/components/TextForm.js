import React,{useState} from 'react'

export default function TextForm(props) {
  const[text,setText] =useState("Enter your text here");
  const handleUpClick=()=>{
    console.log("Uppercase was clicked");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase","success")
 
  }
  const handleOnChange = (event)=>{
    console.log("heyy");
    setText(event.target.value)
  }
  const handleLoClick = ()=>{
    let a = text.toLowerCase();
    setText(a);
    props.showAlert("Converted to Lower Case","success")
  }
  const handleClearClick = ()=>{
    let a = '';
    setText(a);
    props.showAlert("Text Cleared","success")
  }
  const handleCopy =()=>{
    
    navigator.clipboard.writeText(text);
    props.showAlert("Copied to Clipboard","success")
  }
  const handleExtraSpaces = ()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Removed Extra Spaces","success")
  }
  let d = 0;
  if (text ===""){
    d=0;
  }else{
    d=0.008 * text.split(" ").length;
  }
  

  return (
        
        <div className="mb-3">
          <div className="container my-3">
            {/* <h3 style={{color: props.mode==='DARK'?'white':'#016269'}}>{props.heading}</h3> */}
            <textarea className="form-control" style={{color: props.mode==='DARK'?'white':'#016269',backgroundColor:props.mode==='DARK'?'grey':'white'}} id="myBox" value={text} onChange ={handleOnChange} rows="8"></textarea>
            <button className="btn btn-primary mx-1 my-1" onClick ={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-1 my-1" onClick ={handleLoClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-1 my-1" onClick ={handleClearClick}>Clear Text</button>
            <button className="btn btn-primary mx-1 my-1" onClick ={handleCopy}>Copy Text</button>
            <btton className="btn btn-primary mx-1 my-1" onClick ={handleExtraSpaces}>Remove Extra Spaces</btton>
        </div>
          <div className="container my-3" style={{color: props.mode==='DARK'?'white':'black'}}>
            <h5>Your Text Summary</h5>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
            <p>Took {d} minutes to read</p>
            <h5>Preview</h5>
            <p>{text.length===0?'Enter some text to preview it here':text}</p>
          </div>
      </div>

      )
}
