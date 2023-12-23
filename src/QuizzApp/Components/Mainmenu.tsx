import {  Container } from "react-bootstrap";
import { QuestionType } from "./QuizCard";


export function Mainmenu() {
   
    return (
        <Container className="d-flex justify-content-center items-center flex-wrap gap-3">
            <QuestionType quizType="Video Games" quizCatergory={15}/>
            <QuestionType quizType="Information Technology" quizCatergory={18}/>
            <QuestionType quizType="General Knowledge" quizCatergory={9}/>
            <QuestionType quizType="Mathematics" quizCatergory={19}/>
            <QuestionType quizType="Films" quizCatergory={11}/>
        </Container>
    );
}
