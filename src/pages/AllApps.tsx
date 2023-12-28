import Container from "react-bootstrap/esm/Container";
import { ContentCard } from "../Components/ContentCard";


export function AllApps() {
    return (
        <>
            <Container className="d-flex gap-3 pt-5 flex-wrap justify-content-center " >
                <ContentCard location="quizzapp" context="Built from OpenTDP API, and randomizing the answers and showing score and correct answers" photo="quizz-app.jpg"/>
                <ContentCard location="todolist" context="Simple to-do list built from scratch to learn basics of React" photo="to-do.png"/>
            </Container>
        </>
    );
}
