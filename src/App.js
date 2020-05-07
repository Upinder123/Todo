import React,{Component} from 'react';
import Header from './components/header'
import Todos from './components/Todo';
import AddTodo from './components/adddo';
import uuid from 'uuid';
import {BrowserRouter as Router,Route} from 'react-router-dom';
class App extends Component{
    state = {
        todos: [
            {
            id:uuid.v4(),
            title: 'Take out trash',
            completed: false
        },
        {
            id :uuid.v4(),
            title: 'Dinner with wife',
            completed: false
        },
        {
            id:uuid.v4(),
            title: 'Meeting with boss',
            completed: false
        }
        ]
    }

    markComplete=(id)=>{
        this.setState({todos:this.state.todos.map(todo =>{
            if(todo.id === id){
                todo.complete = !todo.completed;
                console.log("changes")
            }
            return todo

        })});
    }
    delTodo = (id) =>{
        this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)]});
    }

    addTodo=(title) =>{
        const newTodo={
            id: uuid.v4(),
            title:title,
            completed:false
        }
        this.setState({
            
            todos:[...this.state.todos,newTodo]
        })
    }
    render(){
        return(
            <Router>
                <div className="App">
                    <div className="container">
                    <Header/> 
                    <Route exact path='/' render={props => (
                        <React.Fragment>
                                <AddTodo addtodo={this.addTodo} />
                                <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/>
                        </React.Fragment>
                    )} />
                    <Route path="/about" component={About}/>
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;