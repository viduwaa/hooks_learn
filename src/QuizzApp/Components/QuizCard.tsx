import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { QuizContext } from '../Helpers/Context';

export function QuestionType({quizType,quizCatergory}:{quizType:string,quizCatergory:number}) {
  const {  setGameState, setQuizCatergory  } = useContext(QuizContext);
  
 
  return (
    <Card className="text-center" style={{minWidth:"40%"}}>
      <Card.Body>
        <Card.Title>{quizType}</Card.Title>
        <Card.Text>
          10 Intermediate Questions about {quizType} 
        </Card.Text>
        <Button onClick={() => {
          setGameState("quiz") 
          setQuizCatergory(quizCatergory)
          }}>Start</Button>
      </Card.Body>
     
    </Card>
  );
}

