import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../../slice/todoSlice";

export default () => {
  const dispatch = useDispatch();
  let task = useSelector((state) => state.todo[1]);
  return (
    <>
      <h2>Single Task</h2>
      {task && task.title}
      <button onClick={dispatch(addTodo({ id: 100, title: "Custom Task" }))}>
        Add Custom Task
      </button>
    </>
  );
};
