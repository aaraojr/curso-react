import React, {Component} from 'react'
import PagerHeader from '../template/pageHeader'
import TodoForm from './TodoForm'
import TodoList from './TodoList'

export default class Todo extends Component {
    render() {
        return (
            <div>
                <PagerHeader name='Tarefas' small='Cadastro'></PagerHeader>
                <TodoForm />
                <TodoList />
            </div>
        )
    }
}