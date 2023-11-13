import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUpclick=()=>{
       // console.log("uppercase was clicked"+text);
        let newtext= text.toUpperCase();
        setText(newtext);
        props.showAlert("convert to Uppercase", "success")
    }

    const handlecopy=()=>{
      let text = document.getElementById("myBox");
     text.select();
     navigator.clipboard.writeText(text.value);
     props.showAlert("convert to copyText", "success")
   }

    const handleclearclick=()=>{
        // console.log("clearText was clicked"+text);
         let newtext="";
         setText(newtext);
         props.showAlert("convert to clearText", "success")
     }
     
     

    const handleOnClhange=(event)=>{
       // console.log("onclhage");
        setText(event.target.value);
    }
    const handleloclick=()=>{
        let newtext= text.toLowerCase();
        setText(newtext);
        props.showAlert("convert to Lowercase", "success")
    }

    const handleExtraSpaces=()=>{
      let newText=text.split(/[ ]+/);
      setText(newText.join(" "))
      props.showAlert("convert to ExtraSpaces", "success")
      
  }


    const[text,setText]=useState('Enter text here')
  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h1>{props.handing}</h1>
      <div className="my-3">
        <textarea className="form-control" value={text} onChange={handleOnClhange} style={{backgroundColor:props.mode==='dark'?'grey':'white', 
        color:props.mode==='dark'?'white':'#042743'}}
         id="myBox" rows="8"></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleUpclick}>convert to Uppercase</button>

      <button className="btn btn-primary mx-2" onClick={handleloclick}>convert to Lowercase</button>
      <button className="btn btn-primary mx-2" onClick={handleclearclick}>Clear Text</button>
      <button className="btn btn-primary mx-2" onClick={handlecopy}>Copy Text</button>
      <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}> ExtraSpaces Text</button>
  
  
    </div>

    <div className="container my-3" style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h2>Your text summary</h2>
        <p>{text.split(" ").length}world and {text.length}characters</p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>

    </div>
    </>
  )
}
