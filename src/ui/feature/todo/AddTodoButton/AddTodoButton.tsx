import { addTodoEffect } from '../../../../model/todo/todo.model.ts';
import { Component } from 'solid-js';


export type AddTodoButtonProps =
    {
        title: string;
    };

export const AddTodoButton: Component<AddTodoButtonProps> = function (props) {
    const { title } = props;

    return (
        <button onClick={ () => addTodoEffect({ title }) }>
            Добавить
        </button>
    );
};