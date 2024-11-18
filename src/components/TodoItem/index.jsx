import './style.css';

function TodoItem(props) {
    const { todo, index, completeTodo } = props;

    const toggleComplete = () => {
        completeTodo(index);
    };

    return (
        <div className={`todo ${todo.isCompleted ? 'complete' : ''}`}>
            <span className="todo-text">{todo.text}</span>
            <div>
                {/* Toggle button label based on completion state */}
                <button onClick={toggleComplete}>
                    {todo.isCompleted ? 'Incomplete' : 'Complete'}
                </button>
                <button onClick={() => props.removeTodo(props.index)}>Delete</button>
            </div>
        </div>
    );
}

export default TodoItem;