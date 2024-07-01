import css from './TodoList.module.scss';
import { todoItems, todoLoading } from '../../../../model/todo/todo.model.ts';
import { TodoItem } from '../../../entity/todo/TodoItem/TodoItem.tsx';
import {
    RemoveTodoButton,
} from '../../../feature/todo/RemoveTodoButton/RemoveTodoButton.tsx';
import {
    UpdateTodoStatusSelection,
} from '../../../feature/todo/UpdateTodoStatusSelection/UpdateTodoStatusSelection.tsx';
import { Component, For, JSX } from 'solid-js';
import { useStore } from '../../../../hook/useStore.ts';
import { DomainTodo } from '../../../../types/todo/todo.type.ts';


export const TodoList: Component = function () {
    const items   = useStore(todoItems);
    const loading = useStore(todoLoading);

    return (
        <section class={ css.container }>
            <h2>Список</h2>
            {
                loading()
                ? 'Загрузка...'
                :
                <For<Array<DomainTodo>, Node | JSX.ArrayElement | string | number | boolean | null | undefined>
                    each={ items() } fallback={ '' }>
                    { (todo) => (
                        <TodoItem
                            title={ todo.title }
                            prefix={ <RemoveTodoButton todoId={ todo.id }/> }
                            postfix={
                                <UpdateTodoStatusSelection
                                    todoId={ todo.id }
                                    status={ +todo.status }
                                />
                            }
                        />
                    ) }
                </For>
            }
        </section>
    );
};