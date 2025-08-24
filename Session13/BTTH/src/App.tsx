import { Component } from 'react'
import "./styles.css"
import TodoItem from './components/TodoItem'

interface Todo {
  id: number
  content: string
  isDone: boolean
}
interface StateType {
  todos: Todo[]
  inputTodo: string
}

export default class App extends Component<{}, StateType> {
  constructor(props: {}) {
    super(props)
    this.state = {
      todos: [
        { id: 1, content: "Công việc 1", isDone: true },
        { id: 2, content: "Công việc 2", isDone: true },
        { id: 3, content: "Công việc 3", isDone: false },
      ],
      inputTodo: ""
    }
  }
  render() {
    let { todos } = this.state
    const handleInputTodo = (e: React.ChangeEvent<HTMLInputElement>) => {
      this.setState({
        inputTodo: e.target.value
      })
    }
    const addTodo = () => {
      let newTodo: Todo = {
        id: todos.length,
        content: this.state.inputTodo,
        isDone: false
      }
      this.setState({
        todos: [...todos, newTodo]
      })
    }

    return (
      <div className="container">
        {/* Header */}
        <div className="header">
          <h1>📝 TodoList</h1>
          <p>Quản lý công việc hiệu quả</p>
        </div>
        {/* Input Section */}
        <div className="input-section">
          <div className="input-group">
            <input
              type="text"
              className="task-input"
              placeholder="Nhập công việc cần làm..."
              maxLength={100}
              onChange={handleInputTodo}
            />
            <button className="add-btn" onClick={addTodo}>➕ Thêm</button>
          </div>
          <div className="error-message">{/* Thông báo lỗi sẽ hiển thị ở đây */}</div>
        </div>
        {/* Empty State */}
        {todos.length === 0 ? <div className="empty-state">
          <div className="empty-state-icon">📋</div>
          <div className="empty-state-text">Chưa có công việc nào</div>
          <div className="empty-state-subtext">
            Hãy thêm công việc đầu tiên của bạn!
          </div>
        </div>
          : <div className="todo-list">
            {/* Todo List */}
            {todos.map((todo) => {
              return <TodoItem key={todo.id} content={todo.content} isDone={todo.isDone}></TodoItem>
            })}
          </div>}
        {/* Footer */}
        <div className="footer">
          <div className="task-counter">
            Đã hoàn thành: <span className="counter-number">{todos.filter((todo) => todo.isDone).length}</span> /
            <span className="counter-number">{todos.length}</span> công việc
          </div>
        </div>
      </div>
    )
  }
}