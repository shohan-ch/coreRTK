import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo } from "../../slice/todoSlice";

export default () => {
  const dispatch = useDispatch();
  let inputRef = useRef(null);
  let list = useSelector((state) => state.todo);

  let todoAdd = () => {
    let data = {
      id: Math.round(Math.random() * 111),
      title: inputRef.current.value,
    };
    dispatch(addTodo(data));
    inputRef.current.value = "";
  };
  let todoDelete = (id) => {
    dispatch(deleteTodo({ id }));
  };
  let showTodos =
    list.length > 0 &&
    list.map((item, index) => {
      return (
        <li key={index}>
          {item.title} <button onClick={() => todoDelete(item.id)}>X</button>
        </li>
      );
    });

  return (
    <>
      <h2>Add To do</h2>
      <input
        ref={inputRef}
        type="text"
        placeholder="add todo"
        style={{ marginBottom: "20px" }}
      />
      <button onClick={todoAdd}>Add</button>
      <p style={{ marginBottom: "10px" }}>To do List are</p>
      <ul>{showTodos}</ul>
    </>
  );
};
