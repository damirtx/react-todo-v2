import { TodoItem } from './TodoItem'

export function TodoList({ todos, toggleTodo, deleteTodo }) {
	return (
		<ul className="tasks__list">
			{todos.length === 0 && 'No Todos'}
			{todos.filter(todo => todo.visible).map(todo => {
				return (
					<TodoItem
						{...todo}
						key={todo.id}
						toggleTodo={toggleTodo}
						deleteTodo={deleteTodo}
					/>
				)
			})}
		</ul>
	)
}
