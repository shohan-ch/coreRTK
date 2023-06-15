import { useSelector } from "react-redux";

export default () => {
  const count = useSelector((state) => state.counter.count);

  return (
    <>
      <h2>Child component count: {count} </h2>
    </>
  );
};
