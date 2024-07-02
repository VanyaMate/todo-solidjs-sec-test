import classNames from 'classnames';
import css from './RemoveTodoButton.module.scss';
import {
    removeTodoEffect,
    todoStatus,
} from '../../../../model/todo/todo.model.ts';
import { useStore } from '@vanyamate/sec-solidjs';
import { Component } from 'solid-js';


export type RemoveTodoButtonProps =
    {
        todoId: string;
    };

export const RemoveTodoButton: Component<RemoveTodoButtonProps> = function (props) {
    const { todoId, ...other } = props;
    const status               = useStore(todoStatus);

    return (
        <button
            { ...other }
            onClick={ () => removeTodoEffect(todoId) }
            class={ classNames(css.container, { [css.pending]: status()[todoId] }) }
        >
            Удалить
        </button>
    );
};