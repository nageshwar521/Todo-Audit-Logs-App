import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components"
import { addTask, deleteTask, editTask, updateTask } from "../store/taskActions";
import { addLog } from "../store/auditActions";

const Main = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 20px;
`;

const FormContainer = styled.div`
    display: flex;
    margin-bottom: 10px;
`;

const FooterContainer = styled.div`
    display: flex;
    flex-direction: row;
`;

const StyledInput = styled.input`
    display: flex;
    padding: 10px 20px;
    font-size: 16px;
`;

const StyledButton = styled.button`
    display: flex;
    padding: 10px 20px;
    font-size: 16px;
`;

const VerticalSpacing = styled.span`
    width: 10px;
    display: inline-block;
`;

const TodoForm = ({ task, totalTasks, onSubmit }) => {
    const [taskName, setTaskName] = useState('');

    useEffect(() => {
        if (task) {
            setTaskName(task.taskName);
        }
    }, [task]);

    const handleInputChange = (e) => {
        setTaskName(e.target.value);
    }

    const handleSubmitTask = () => {
        if (onSubmit) {
            if (task) {
                onSubmit({ ...task, taskName });
            } else {
                onSubmit({ taskName, id: totalTasks + 1 })
            }
            setTaskName('');
        }
    }

    return <Main>
        <h3>Add New Task</h3>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
            <StyledInput value={taskName} onChange={handleInputChange} />
            <VerticalSpacing />
            <StyledButton onClick={handleSubmitTask}>{task ? 'Edit Task' : 'Add Task'}</StyledButton>
        </div>
    </Main>
}

const TodoList = () => {
    const dispatch = useDispatch();
    const { tasks, editTaskItem } = useSelector(state => state.tasks);

    const handleAddTask = (newTask) => {
        if (newTask.taskName) {
            if (editTaskItem) {
                dispatch(updateTask(newTask));
                dispatch(addLog('updateTask'));
            } else {
                dispatch(addTask(newTask));
                dispatch(addLog('addTask'));
            }
        }
    }

    const handleEditTask = (task) => {
        dispatch(editTask(task));
        dispatch(addLog('editTask'));
    }

    const handleDeleteTask = (taskId) => {
        dispatch(deleteTask(taskId));
        dispatch(addLog('deleteTask'));
    }

    console.log(editTaskItem, 'editTaskItem')

    return <>
        <Main>
            <FormContainer>
                <TodoForm
                    task={editTaskItem}
                    totalTasks={tasks.length}
                    onSubmit={handleAddTask} />
            </FormContainer>
            <FooterContainer>
                <ul style={{ listStyle: 'none', margin: 0, padding: 0, width: 300 }}>
                    {
                        tasks.length > 0 ? tasks.map((taskItem) => {
                            return (
                                <li style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'space-between', padding: 10, backgroundColor: '#efefef', marginBottom: 2 }} key={taskItem.id}>
                                    <div>{taskItem.taskName}</div>
                                    <div>
                                        <button onClick={handleEditTask.bind(null, taskItem)}>Edit</button>
                                        <VerticalSpacing />
                                        <button onClick={handleDeleteTask.bind(null, taskItem.id)}>Delete</button>
                                    </div>
                                </li>
                            );
                        }) : <li style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'space-between', padding: 10, marginBottom: 2 }}>
                            No tasks found... Add new task
                        </li>
                    }
                </ul>
            </FooterContainer>
        </Main>
    </>
}

export default TodoList;