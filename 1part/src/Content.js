const part1 = "Fundamentals of React ";
export const exercises1 = 10;
const part2 = "Using props to pass data ";
export const exercises2 = 7;
const part3 = "State of a component ";
export const exercises3 = 14;

const Content = () => {
  return (
    <div>
      <p>
        {part1}
        {exercises1}
      </p>
      <p>
        {part2}
        {exercises2}
      </p>
      <p>
        {part3}
        {exercises3}
      </p>
    </div>
  );
};

export default Content;