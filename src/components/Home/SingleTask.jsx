import { useSelector } from "react-redux";

export default () => {
  let task = useSelector((state) => state.todo[1]);
  return (
    <>
      <h2>Single Task</h2>
      {task && task.title}
    </>
  );
};
