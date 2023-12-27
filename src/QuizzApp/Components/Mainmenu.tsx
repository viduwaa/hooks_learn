import {  Container } from "react-bootstrap";
import { QuestionType } from "./QuizCard";
import { useEffect } from "react";


export function Mainmenu() {
    function scrollToView() {
        var divElement =document.getElementById('nav')
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
        <Container id="mainmenu" className="d-flex justify-content-center items-center flex-wrap gap-3">
            <QuestionType quizType="Video Games" quizCatergory={15}/>
            <QuestionType quizType="Information Technology" quizCatergory={18}/>
            <QuestionType quizType="General Knowledge" quizCatergory={9}/>
            <QuestionType quizType="Mathematics" quizCatergory={19}/>
            <QuestionType quizType="Films" quizCatergory={11}/>
        </Container>
    );
}
