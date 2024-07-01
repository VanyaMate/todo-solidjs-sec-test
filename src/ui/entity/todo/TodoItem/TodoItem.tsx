import css from './TodoItem.module.scss';
import { Component, JSX } from 'solid-js';


export type TodoItemProps =
    {
        title: string;
        prefix?: Node | JSX.ArrayElement | string | number | boolean | null | undefined;
        postfix?: Node | JSX.ArrayElement | string | number | boolean | null | undefined;
    };

export const TodoItem: Component<TodoItemProps> = function (props) {
    const { prefix, postfix, title } = props;

    return (
        <article
            class={ css.container }
        >
            { prefix }
            <h3 class={ css.title }>{ title }</h3>
            { postfix }
        </article>
    );
};