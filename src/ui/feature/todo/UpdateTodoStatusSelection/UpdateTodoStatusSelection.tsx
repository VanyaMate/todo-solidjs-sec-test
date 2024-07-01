import classNames from 'classnames';
import css from './UpdateTodoStatusSelection.module.scss';
import { DomainTodoStatus } from '../../../../types/todo/todo.type.ts';
import {
    todoStatus,
    updateTodoEffect,
} from '../../../../model/todo/todo.model.ts';
import { Component } from 'solid-js';
import { useStore } from '../../../../hook/useStore.ts';


export type UpdateTodoStatusSelectionProps =
    {
        todoId: string;
        status: DomainTodoStatus;
    };

export const UpdateTodoStatusSelection: Component<UpdateTodoStatusSelectionProps> = function (props) {
    const { todoId, status } = props;
    const todoItemsStatus    = useStore(todoStatus);

    return (
        <select
            class={ classNames(css.container, { [css.pending]: todoItemsStatus()[todoId] }) }
            value={ status }
            onChange={ (event) => updateTodoEffect([ todoId, { status: event.target.value as unknown as DomainTodoStatus } ]) }
        >
            <option
                value={ DomainTodoStatus.AWAIT }
                selected={ status === DomainTodoStatus.AWAIT }
            >
                Ожидает
            </option>
            <option
                value={ DomainTodoStatus.IN_PROGRESS }
                selected={ status === DomainTodoStatus.IN_PROGRESS }
            >
                Выполняется
            </option>
            <option
                value={ DomainTodoStatus.DONE }
                selected={ status === DomainTodoStatus.DONE }
            >
                Завершено
            </option>
        </select>
    );
};