import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../../slice/counterSlice";
import Counter from "./Counter";
import Todo from "./Todo";

export default () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.count);

  return (
    <>
      <h2>Home Page</h2>
      <p>Count Number: {count}</p>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <Counter />

      <Todo />
    </>
  );
};
