import { useState } from "react";
import "./styles.css";
//import { InputTodo } from "./components/InputTodo";

export default function App() {
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([]);

  const onChangeTodoText = (e) => setTodoText(e.target.value);

  const onClickAddButton = () => {
    if (setTodoText === "") return;
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText("");
  };

  const onClickFinButton = (todoText, index) => {
    const newOutTodos = [...incompleteTodos];
    newOutTodos.splice(index, 1);
    setIncompleteTodos(newOutTodos);

    const newInTodos = [...completeTodos, todoText];
    setCompleteTodos(newInTodos);
  };

  const onClickDelButton = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  };

  const onClickBakButton = (todoText, index) => {
    const newOutTodos = [...completeTodos];
    newOutTodos.splice(index, 1);
    setCompleteTodos(newOutTodos);

    const newInTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newInTodos);
  };

  return (
    <>
      <div className="input-area">
        <input
          placeholder="todoを入力"
          value={todoText}
          onChange={onChangeTodoText}
        />
        {}
        <button onClick={onClickAddButton}>追加</button>
      </div>
      {incompleteTodos.length >= 5 && (
        <p style={{ color: "red" }}>登録出来るtodoは5個まで!</p>
      )}
      <div className="incomplete-area">
        <p className="title">未完了のtodo</p>
        <ul>
          {incompleteTodos.map((todo, index) => {
            return (
              <div key={todo} className="list-area">
                <li>{todo}</li>
                <button onClick={() => onClickFinButton(todo, index)}>
                  完了
                </button>
                <button onClick={() => onClickDelButton(index)}>削除</button>
              </div>
            );
          })}
        </ul>
      </div>
      <div className="compleate-area">
        <p className="title">完了のtodo</p>
        <ul>
          {completeTodos.map((todo, index) => {
            return (
              <div key={todo} className="list-area">
                <li>{todo}</li>
                <button onClick={() => onClickBakButton(todo, index)}>
                  戻す
                </button>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
}
