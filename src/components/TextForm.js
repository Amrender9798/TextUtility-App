import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('');
    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase!","success");
    }
    const handleLoClick = () =>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase!","success");

    }
    const handleClearClick = () =>{
        let newText = '';
        setText(newText);
        props.showAlert("Text Cleared!","success");
        
    }
    const handleCopyClick = () =>{
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to Clipboard!","success");     

    }
    const handleExtraSpaces = () =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed!","success");
    }
    return (
        <>
            <div className= "container" style = {{color : props.mode === 'dark' ? 'white' : '#042743'}}>
                <h2>{props.heading}</h2>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style = {{backgroundColor : 
                        props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white':'#042743'
                    }} id="myBox" rows="8"></textarea>
                </div>
                <button type="button" className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
                <button type="button" className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to LowerCase</button>
                <button type="button" className="btn btn-primary mx-2" onClick={handleCopyClick}>Copy Text</button>
                <button type="button" className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
                <button type="button" className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            </div>
            <div className="container my-3" style = {{color : props.mode === 'dark' ? 'white' : '#042743'}}>
                <h2>Your text summary</h2>
                <p>{text.split(/\s+/).filter((element) =>{return element.length != 0}).length} and {text.length} characters</p>
                <h3>preview</h3>
                <p>{text.length > 0 ? text : "Nothing to preview!"}</p>
            </div>
        </>
    )
}
