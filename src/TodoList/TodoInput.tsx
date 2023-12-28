import { useState } from "react";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";

type InputProps={
    onAddText:(text:string)=> void;
}

export function TodoInput({onAddText}:InputProps) {
    const [inputText,setInputText] = useState<string>('');
    
    const handleInputChange = (event:React.ChangeEvent<HTMLInputElement>)=>{
        setInputText(event.target.value)
    }

    const handleAddText = () =>{
        if (inputText.trim() !== ''){
            onAddText(inputText)
            setInputText('')
        }
    }

    return (
        <div id="TodoInput" className="w-50  m-auto">
            <Form>
                <Form.Label className="my-2">Enter a Task</Form.Label>
                <Form.Control
                    onChange={handleInputChange}
                    type="text"
                    placeholder="Your Task"
                    value={inputText}
                />
                <Button variant="primary" className="my-3" onClick={handleAddText}>
                    Add Task
                </Button>{" "}
            </Form>
        </div>
    );
}
