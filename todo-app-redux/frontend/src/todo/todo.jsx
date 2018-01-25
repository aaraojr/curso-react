import React from 'react'

import PagerHeader from '../template/pageHeader'
import TodoForm from './TodoForm'
import TodoList from './TodoList'

export default props => (
    <div>
        <PagerHeader name='Tarefas' small='Cadastro' />
        <TodoForm />
        <TodoList  />
    </div>
)
