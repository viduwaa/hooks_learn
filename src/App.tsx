import { BSNavbar } from "./Components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {AllApps} from "./pages/AllApps";
import {About} from "./pages/About";
import QuizApp from "./QuizzApp/QuizApp";
import { ToDoList } from "./TodoList/ToDoList";

export default function App() {
    return (
        <>
            <Router>
                <BSNavbar />
                <Routes>
                    <Route path="/" element={<AllApps/>}></Route>
                    <Route path="/about" element={<About/>}></Route>
                    <Route path="/quizzapp" element={<QuizApp />}></Route>
                    <Route path="/todolist" element={<ToDoList />}></Route>
                </Routes>
            </Router>
        </>
    );
}
