import { useContext, useEffect } from "react";
import Button from "react-bootstrap/esm/Button";
import { QuizContext } from "../Helpers/Context";


export function ResultScreen({ Marks }: { Marks: string }) {
    const { setGameState } =
        useContext(QuizContext);
    
    function scrollToView() {
        var divElement =document.getElementById('endscreen')
        if(divElement){
            divElement.scrollIntoView({behavior:'smooth'})
        }else{
            null
        }
        
    }

    useEffect(() => {
        scrollToView();
    }, []);
    

    return (
        <>
            <div id="endscreen" className="w-50 border-start border-top-md ms-3 border-primary ps-3 d-flex flex-column align-items-center ">
                <h2 className="ms-2 mt-2">{Marks}</h2>
                <Button
                    onClick={() => {
                        setGameState("menu")
                    }}
                >
                    Try Again ?
                </Button>
            </div>
        </>
    );
}
