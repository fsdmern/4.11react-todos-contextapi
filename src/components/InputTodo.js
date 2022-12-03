import React, {useState, useContext} from 'react';
import { TodosContext } from '../context';

const InputTodo =(props) => {
  const value = useContext(TodosContext);
  const { addTodoItem } = value

  const [inputText, setInputText] = useState({title: ""})
  
  const onChange = (e) => {
    setInputText({
        [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    addTodoItem(inputText.title)
    setInputText({
        title: ""
    })
  }

    return (
      <form onSubmit={handleSubmit} className="form-container">
        <input
          type="text"
          name="title"
          className="input-text"
          placeholder="Add a todo.."
          value={inputText.title}
          onChange={onChange}
        />
        <input type="submit" value="Submit" className="input-submit" />
      </form>
    );
}
export default InputTodo