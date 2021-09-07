import React, {useState} from 'react'
import { saveAs } from 'file-saver';

export default function TextForm(props) {
    const [text, settext] = useState('');
    // text = "New text"; Wrong way to change the state
    // settext("New text"); // correct way to change the state
    const handleUpClick = ()=>{
        // console.log("Uppercase was clicked" + text);
        let uppercasetxt = text.toUpperCase()
        settext(uppercasetxt)
        props.showAlert("Converted to Uppercase", "success")
    }

    const handleloClick = ()=>{
        // console.log("Uppercase was clicked" + text);
        let lowcasetxt = text.toLowerCase()
        settext(lowcasetxt)
        props.showAlert("Converted to Lowercase", "success")
    }

    const handlecapitalize = ()=>{
        const lowCase = text.toLowerCase();
        const finalSentence = lowCase.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());

        settext(finalSentence)

        // ^ matches the beginning of the string.
        // \w matches any word character.
        // {1} takes only the first character.
        // Thus, ^\w{1} matches the first letter of the word.
        // | works like the boolean OR. It matches the expression after and before the |.
        // \s+ matches any amount of whitespace between the words (for example spaces, tabs, or line breaks).
    }

    
    const handleCopy = ()=>{
        let text = document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value)
        props.showAlert("Copied to clipboard", "success")
    }

    const handleClear = ()=>{
        let cleartxt = ''
        settext(cleartxt)
        props.showAlert("Textbox cleared", "success")
    }

    // function to save the file in text format
    const saveFile = ()=>{
        let my_text = document.getElementById('myBox').value;
        let blob = new Blob([my_text], {type: "text/plain;charset=utf-8" });
        saveAs(blob, "File.txt");
        props.showAlert("File downloaded", "success")
        
    }

    // const handleRedundandcy = ()=>{
    //     let set1 = new Set(text.split(" "));
    //     let newText = Array.from(set1).join(" ");
    //     settext(newText)
    // }

    // const handleLowClick = ()=> {
    //     let lowertxt = text.toLowerCase()
    //     settext(lowertxt)
    // }

    const handleOnChange = (event)=>{
        // console.log("On change");
        settext(event.target.value)
    }
    return (
        <>
        <div className="container" style={{color: props.mode==='dark'? 'white':'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'? '#091e33':'white', color: props.mode==='dark'? 'white':'black'}} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleloClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-2" onClick={handlecapitalize}>Capitalize</button>
            <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy text</button>
            <button className="btn btn-danger mx-2" onClick={handleClear}>Clear</button>
            <button className="btn btn-success mx-2" onClick={saveFile}>Save</button>
            {/* <button className="btn btn-danger mx-2" onClick={handleRedundandcy}>Remove Redundant Words</button> */}
            
            
            
            
            
        </div>
        <div className="container my-3" style={{color: props.mode==='dark'? 'white':'black'}}>
            <h2>Your text summary</h2>
            
            <p>{text.split(" ").length} <b>words</b>  and {text.length} <b>characters</b></p>
            <p>{Math.round(0.008 * text.split(" ").length)} <strong>Minutes read</strong></p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter some text above to preview it here"}</p>
        </div>
        </>
        
    )
}
