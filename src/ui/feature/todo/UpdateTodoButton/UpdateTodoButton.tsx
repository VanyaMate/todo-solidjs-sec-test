import { updateTodoEffect } from '../../../../model/todo/todo.model.ts';
import { DomainTodoStatus } from '../../../../types/todo/todo.type.ts';
import { Component } from 'solid-js';


export type UpdateTodoButtonProps =
    {
        todoId: string;
        title?: string;
        status?: DomainTodoStatus;
    };

export const UpdateTodoButton: Component<UpdateTodoButtonProps> = function (props) {
    const { todoId, title, status } = props;

    return (
        <button
            onClick={ () => updateTodoEffect([ todoId, { title, status } ]) }
        >
            Обновить
        </button>
    );
};