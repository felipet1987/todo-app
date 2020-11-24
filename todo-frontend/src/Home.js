import React from 'react';
import {
    Container,
    Jumbotron,

} from 'reactstrap';
import TaskForm from './Component/taskForm';
import TaskList from './Component/taskList';



const Title = (props) => {
    return (
        <Jumbotron>
            <h1 className="display-3">Todo App</h1>
        </Jumbotron>
    );
};



const Home = () => {


    return <Container>
        <Title />
        <TaskForm />
        <TaskList/>
    </Container>

}
export default Home