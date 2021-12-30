import React, {useState} from 'react'


export default function TextForm(props) {
    
    const[text, setText] = useState('Enter your text here')

    let handleOnChange = (event)=>{
        setText(event.target.value);
    }
    const handleUppCaseClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handlelowCaseClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleClearClick = ()=>{
        let newText = '';
        setText(newText);
    }
    const handleCopyText = ()=>{
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value)
    }
    const handleExtraSpaces = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }

    return (
        <div>
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUppCaseClick} >Convert to Uppercase</button>
            <button className="btn btn-primary mx-2 my-1" onClick={handlelowCaseClick} >Convert to Lowercase</button>
            <button className="btn btn-primary mx-2 my-1" onClick={handleClearClick} >Clear text</button>
            <button className="btn btn-primary mx-2 my-1" onClick={handleCopyText} >Copy text</button>
            <button className="btn btn-primary mx-2 my-1" onClick={handleExtraSpaces} >Remove Extra Spaces</button>
            <p>Number of words: {text.split(" ").length} Number of characters: {text.length}</p>
            <p>Average time to read: {0.008 * text.split(" ").length} minutes</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
    )
}
