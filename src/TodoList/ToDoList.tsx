import { useState } from "react";
import { TodoInput } from "./TodoInput";
import { Container } from "react-bootstrap";
import { TodoItem } from "./TodoItem";



export function ToDoList() {
	const [addedTexts, setAddedTexts] = useState<string[]>([])

	const handleAddText = (text:string)=>{
		setAddedTexts([...addedTexts,text])
	}

	const handleRemoveText = (index:number)=>{
		const updatedTexts = addedTexts.filter((_,i)=> {
			return i !== index
		})
		setAddedTexts(updatedTexts)
	}

	console.log(addedTexts)

    return (
        <Container>
            <TodoInput onAddText={handleAddText} />
			<TodoItem addedText={addedTexts}  onRemoveText={handleRemoveText}/>
        </Container>
    );
}
