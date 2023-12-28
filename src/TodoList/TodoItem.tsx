import Stack from "react-bootstrap/Stack";
import Button from "react-bootstrap/Button";

type inputProps = {
    addedText:string[]
    onRemoveText:(index: number) => void;
}

export function TodoItem({addedText,onRemoveText}:inputProps) {

    return (
        <Stack id="ToDoList"  className="w-50  m-auto">
            {addedText.map((text, index) => (
                
                <div
                    key={index}
                    className="p-2 bg-primary d-flex align-items-center justify-content-between rounded text-white"
                >
                    {text} 
                    <Button variant="danger" onClick={()=> onRemoveText(index)}>X</Button>{" "}
                </div>
            ))}
        </Stack>
    );
}
