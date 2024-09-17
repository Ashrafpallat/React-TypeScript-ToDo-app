import React from 'react'
import { ITasks } from '../interfaces'
interface Props {
    task: ITasks
}
const TodoTask = ({task}: Props) => {

    return (
        <div>
            {task.taskName} {task.deadline}
        </div>
    )
}

export default TodoTask
