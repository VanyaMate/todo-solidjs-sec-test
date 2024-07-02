import classNames from 'classnames';
import css from './TodoHeader.module.scss';
import {
    addTodoEffect,
    todoAdding,
} from '../../../../model/todo/todo.model.ts';
import { Component } from 'solid-js';
import { useStore } from '@vanyamate/sec-solidjs';


export const TodoHeader: Component = function () {
    let ref: HTMLInputElement | null = null;
    const adding                     = useStore(todoAdding);

    const onSubmit = function (event: Event) {
        event.preventDefault();
        if (ref && ref.value) {
            addTodoEffect({ title: ref.value })
                .then(() => {
                    if (ref) {
                        ref.value = '';
                    }
                });
        }
    };

    return (
        <form class={ classNames(css.container, { [css.pending]: adding() }) }
              onSubmit={ onSubmit }
        >
            <div class={ css.form }>
                <label
                    for={ 'create-todo-input' }
                    class={ css.label }
                >
                    Заголовок
                </label>
                <input
                    id={ 'create-todo-input' }
                    ref={ (el) => ref = el }
                    class={ css.input }
                />
            </div>
            <button type={ 'submit' } class={ css.button }>Создать</button>
        </form>
    );
};