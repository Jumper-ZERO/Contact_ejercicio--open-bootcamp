import React from 'react';
import { Task } from '../../models/task.class';
import { LEVELS } from '../../models/levels.class';
import TaskComponent from '../pure/task';

const TaskListComponent = () => {

    const defaultTask = new Task('Example', 'Default_description', false, LEVELS.NORMAL);

    // const ChangeState = (id) => {
    //     console.log('TODO: cambiar estado de una tarea');
    // }

    return (
        <div>
            <div>
                <h1>Your Tasks</h1>
            </div>
            {/* TODO Aplicar un For/Map par renderizar una lista */}
            <TaskComponent task={ defaultTask }></TaskComponent>
        </div>
    );
}

export default TaskListComponent;