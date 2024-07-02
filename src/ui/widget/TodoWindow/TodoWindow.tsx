import classNames from 'classnames';
import css from './TodoWindow.module.scss';
import {
    loadTodosEffect, todoAdding, todoLoading,
    todoProcess,
} from '../../../model/todo/todo.model.ts';
import { TodoHeader } from './TodoHeader/TodoHeader.tsx';
import { TodoList } from './TodoList/TodoList.tsx';
import { Component, onMount } from 'solid-js';
import { useStore } from '@vanyamate/sec-solidjs';


export const TodoWindow: Component = function () {
    const pending = useStore(todoProcess);
    const adding  = useStore(todoAdding);
    const loading = useStore(todoLoading);

    onMount(loadTodosEffect);

    return (
        <main class={ classNames(css.container) }>
            <h2>Process: { pending().toString() }</h2>
            <h2>Adding: { adding().toString() }</h2>
            <h2>Loading: { loading().toString() }</h2>
            <TodoHeader/>
            <TodoList/>
        </main>
    );
};